import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Faqcomponents from '@packages/shared-components/common-utilities/faq/faqcomponents';
import { graphQlFetchFunction } from '@packages/lib/server-actions/server-action';
import { ContentfulInspectorManager } from '@packages/lib/contentful-preview/ContentfulInspector';

// Mock the graphQlFetchFunction and ContentfulInspectorManager
jest.mock('@packages/lib/server-actions/server-action', () => ({
  graphQlFetchFunction: jest.fn(),
}));

jest.mock('@packages/lib/contentful-preview/ContentfulInspector', () => ({
  ContentfulInspectorManager: jest.fn(() => <div>Contentful Inspector</div>),
}));

// Mock the FaqClient component to avoid its implementation details
jest.mock('../../../shared-components/common-utilities/faq/faq-clientwrap', () => {
  return jest.fn(() => <div>FAQ Client</div>);
});

describe('Faqcomponents', () => {
  const mockJsonData = {
    data: {
      contentData: {
        items: [
          {
            bodyContentCollection: {
              items: [
                {
                  mediaCardsCollection: {
                    items: [{}],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  };

  it('should render correctly with the provided props', async () => {
    // Mock graphQlFetchFunction to return mockJsonData
      (graphQlFetchFunction as jest.Mock)
          .mockResolvedValueOnce(mockJsonData)

    // Render the component
    render(
      <Faqcomponents
        heading="Test Heading"
        subheading="Test Subheading"
        internalName="testInternalName"
        routename="testRoute"
        contentModelName="testModel"
        iscontentPreview={false}
        parentSysId="testSysId"
      />
    );

    // Check if the heading and subheading are rendered correctly
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test Subheading')).toBeInTheDocument();
  });

  it('should display loading text during Suspense phase', async () => {
    // Mock graphQlFetchFunction to return a resolved value
    (graphQlFetchFunction as jest.Mock)
          .mockResolvedValueOnce(mockJsonData)

    // Render the component with iscontentPreview set to false
    render(
      <Faqcomponents
        heading="Test Heading"
        subheading="Test Subheading"
        internalName="testInternalName"
        routename="testRoute"
        contentModelName="testModel"
        iscontentPreview={false}
        parentSysId="testSysId"
      />
    );

    // Check if loading text is visible during the Suspense phase
    expect(screen.getByText('loading')).toBeInTheDocument();

    // Wait for the component to finish loading and check if FAQ Client is rendered
    await waitFor(() => expect(screen.getByText('FAQ Client')).toBeInTheDocument());
  });

  it('should call graphQlFetchFunction with the correct query parameters', async () => {
    const mockQuery = 'mock query'; // You may want to customize this if the query format is known
    (graphQlFetchFunction as jest.Mock)
          .mockResolvedValueOnce(mockJsonData)

    // Render the component
    render(
      <Faqcomponents
        heading="Test Heading"
        subheading="Test Subheading"
        internalName="testInternalName"
        routename="testRoute"
        contentModelName="testModel"
        iscontentPreview={false}
        parentSysId="testSysId"
      />
    );

    // Wait for the query to be executed and check if the graphQlFetchFunction was called
    await waitFor(() => expect(graphQlFetchFunction).toHaveBeenCalledWith(mockQuery, false));
  });

  it('should render ContentfulInspectorManager when iscontentPreview is true', async () => {
    (graphQlFetchFunction as jest.Mock)
          .mockResolvedValueOnce(mockJsonData)

    render(
      <Faqcomponents
        heading="Test Heading"
        subheading="Test Subheading"
        internalName="testInternalName"
        routename="testRoute"
        contentModelName="testModel"
        iscontentPreview={true}
        parentSysId="testSysId"
      />
    );

    // Check if ContentfulInspectorManager is rendered
    expect(screen.getByText('Contentful Inspector')).toBeInTheDocument();
  });
});
