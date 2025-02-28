import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Eligibilitycriteriacomponents from '@packages/shared-components/article-landing/eligibility-criteria/eligibilitycriteriacomponents';

// Mock the external dependencies
jest.mock('@packages/lib/server-actions/server-action', () => ({
  graphQlFetchFunction: jest.fn(),
}));

jest.mock('@packages/lib/graphQL/graphql-query', () => ({
  discoverpodQuery: jest.fn(),
}));

jest.mock('@packages/lib/graphQL/fetch-function', () => ({
  homePageComponentQueryFormation: jest.fn(),
}));

jest.mock('@packages/shared-components/common-utilities/cards/eligibility-criteria/eligibilitycriteriacard', () => ({
    Eligibilitycriteriacard: ({ data }) => <div>{data?.name}</div>,
}));

jest.mock('@packages/lib/contentful-preview/ContentfulInspector', () => ({
  ContentfulInspectorManager: () => <div>Inspector</div>,
}));

describe('Eligibilitycriteriacomponents', () => {
  const mockProps = {
    heading: 'Test Heading',
    subheading: 'Test Subheading',
    internalName: 'testInternalName',
    routename: 'testRoute',
    contentModelName: 'testModel',
    iscontentPreview: true,
    parentSysId: '12345',
  };

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('renders the component correctly with heading and subheading', async () => {
    // Mock the GraphQL function and return dummy data
    jest.mock('@packages/lib/server-actions/server-action', () => ({
      graphQlFetchFunction: jest.fn().mockResolvedValue({
        data: {
          contentData: {
            items: [
              {
                bodyContentCollection: {
                  items: [
                    {
                      mediaCardsCollection: {
                        items: [
                          { sys: { id: '1' }, name: 'Card 1' },
                          { sys: { id: '2' }, name: 'Card 2' },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      }),
    }));

    render(<Eligibilitycriteriacomponents {...mockProps} />);

    // Wait for async data to load
    await waitFor(() => screen.getByText('Card 1'));

    // Check if the heading and subheading are rendered
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test Subheading')).toBeInTheDocument();

    // Check if the cards are rendered
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
  });

  it('renders ContentfulInspectorManager when iscontentPreview is true', async () => {
    // Mock the GraphQL function with empty data
    jest.mock('@packages/lib/server-actions/server-action', () => ({
      graphQlFetchFunction: jest.fn().mockResolvedValue({
        data: {
          contentData: {
            items: [
              {
                bodyContentCollection: {
                  items: [
                    {
                      mediaCardsCollection: {
                        items: [],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      }),
    }));

    render(<Eligibilitycriteriacomponents {...mockProps} />);

    // Check if ContentfulInspectorManager is rendered
    expect(screen.getByText('Inspector')).toBeInTheDocument();
  });

  it('renders no data message when there is no data', async () => {
    // Mock the GraphQL function with no data
    jest.mock('@packages/lib/server-actions/server-action', () => ({
      graphQlFetchFunction: jest.fn().mockResolvedValue({
        data: {
          contentData: {
            items: [],
          },
        },
      }),
    }));

    render(<Eligibilitycriteriacomponents {...mockProps} />);

    // Wait for component to finish rendering
    await waitFor(() => expect(screen.queryByText('Card 1')).not.toBeInTheDocument());
    expect(screen.queryByText('Card 2')).not.toBeInTheDocument();
  });
});
