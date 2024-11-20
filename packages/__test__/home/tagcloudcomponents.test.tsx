import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the additional matchers like toBeInTheDocument
import Tagcloudcomponents from '@packages/shared-components/home/tag-cloud/tagcloudcomponents';
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
//import { tagCloudQuery } from "@packages/lib/graphQL/graphql-query";
import { HomePageInterface } from '@packages/lib/types/interfaces';

jest.mock('@packages/lib/server-actions/server-action', () => ({
  graphQlFetchFunction: jest.fn(),
}));

const tagCloudMockResponse = {
  data: {
    contentData: {
      items: [
        {
          bodyContentCollection: {
            items: [
              {
                __typename: 'ContentItem',
                mediaCardsCollection: {
                  items: [
                    {
                      tagName: 'Business',
                      tagUrl: '/degree-courses/search?subject=business',
                    },
                    {
                      tagName: 'Physiotherapy',
                      tagUrl: '/degree-courses/search?subject=physiotherapy',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
};

const tagCloudMockEmptyResponse = {
  data: {
    contentData: {
      items: [],
    },
  },
};

describe('TagCloud Component', () => {
  

    test('should render the tag cloud pod data', async () => {
      const props = {heading: 'This is tag cloud pod'};
      (graphQlFetchFunction as jest.Mock).mockResolvedValue(tagCloudMockResponse);
      render(await Tagcloudcomponents(props));
    
      //   // Check that the tag cloud header div is present
      //   const tagCloudHeader = screen.getByRole('heading', { level: 6 });
      //   expect(tagCloudHeader).toBeInTheDocument();
      //   //expect(tagCloudHeader).toHaveClass('font-bold');
      //   expect(tagCloudHeader).toHaveTextContent('Tag cloud heading');

      //   // Check that the li elements and their links are present
      //   const listItems = screen.getAllByRole('listitem');
      //  // expect(listItems).toHaveLength(15); // Assuming there are exactly 2 li elements

      //   listItems.forEach((item) => {
      //     const link = item.querySelector('a');
      //     expect(link).toBeInTheDocument();
      //     //expect(link).toHaveClass('font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]');
      //     expect(link).toHaveTextContent('Badge');
      //   });
    });

    test('should render the tag cloud pod data', async () => {
      const props = {heading: ''};
     (graphQlFetchFunction as jest.Mock).mockResolvedValue(tagCloudMockEmptyResponse);
      render(await Tagcloudcomponents(props));
    });
});