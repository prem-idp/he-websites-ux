import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Richtextcomponent from '@packages/shared-components/article-details/richtextcomponent/richtextcomponent';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

jest.mock('@contentful/live-preview/react', () => ({
  useContentfulLiveUpdates: jest.fn(),
}));

jest.mock('@contentful/rich-text-react-renderer', () => ({
  documentToReactComponents: jest.fn(() => 'Mocked Rich Text Content'),
}));

// jest.mock('next/image', () => ({
//   __esModule: true,
//   default: ({ alt, src, ...props }) => <img alt={alt} src={src} {...props} />,
// }));

describe('Richtextcomponent', () => {
  const useContentfulLiveUpdatesMock = require('@contentful/live-preview/react').useContentfulLiveUpdates;

  beforeEach(() => {
    useContentfulLiveUpdatesMock.mockReturnValue({
      paragraphTitle: 'Test Paragraph Title',
      media: { url: '/test-image.jpg' },
      skipLinkId: 'test-skip-link',
      paragraphBodyRichText: { json: {} },
    });
  });

  test('renders the paragraph title if present', () => {
    render(<Richtextcomponent propsdata={{}} />);
    expect(screen.getByText('Test Paragraph Title')).toBeInTheDocument();
  });

  test('renders the image if media URL is present', () => {
    render(<Richtextcomponent propsdata={{}} />);
    const image = screen.getByAltText('Image');
    expect(image).toBeInTheDocument();
   // expect(image).toHaveAttribute('src', expect.stringContaining('/test-image.jpg'));
  });

  test('renders rich text content if paragraphBodyRichText is present', () => {
    render(<Richtextcomponent propsdata={{}} />);
    expect(screen.getByText('Mocked Rich Text Content')).toBeInTheDocument();
    expect(documentToReactComponents).toHaveBeenCalledWith({}, expect.anything());
  });

  // test('renders the skip link ID on the container div', () => {
  //   render(<Richtextcomponent propsdata={{}} />);
  //   const container = screen.getByTestId('test-skip-link');
  //   expect(container).toBeInTheDocument();
  // });
});
