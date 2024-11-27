import { render, screen } from '@testing-library/react';
import Menucategory2card from '../../shared-components/common-utilities/megamenu/menucategory2card'; // Update path if needed
import '@testing-library/jest-dom'; // Ensure jest-dom is available

describe('Menucategory2card', () => {
  const mockData = [
    {
      flagNavItemStyle: 'L2 Text',
      navTitle: 'Category Title',
      navUrl: '',
      navCtaTarget: false,
      navIcon: { url: 'https://via.placeholder.com/44' },
    },
    {
      flagNavItemStyle: 'Other',
      navTitle: 'Link 1',
      navUrl: 'https://example.com/1',
      navCtaTarget: false,
      navIcon: { url: 'https://via.placeholder.com/44' },
    },
    {
      flagNavItemStyle: 'Other',
      navTitle: 'Link 2',
      navUrl: 'https://example.com/2',
      navCtaTarget: true,
      navIcon: { url: 'https://via.placeholder.com/44' },
    },
  ];

  it('renders the category title when "L2 Text" style is found in data', () => {
    render(<Menucategory2card data={mockData} />);

    // Check that the category title is rendered
    const titleElement = screen.getByText('Category Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders all the links except "L2 Text"', () => {
    render(<Menucategory2card data={mockData} />);

    // Check that the links are rendered
    const linkElements = screen.getAllByRole('link');
    expect(linkElements).toHaveLength(2); // Because there are 2 non-'L2 Text' items

    // Check the content of the links
    expect(screen.getByText('Link 1')).toBeInTheDocument();
    expect(screen.getByText('Link 2')).toBeInTheDocument();
  });

  it('renders the correct image with src and alt attributes', () => {
    render(<Menucategory2card data={mockData} />);

    // Check that the images are rendered with the correct src and alt
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2); // Two links have images
    expect(images[0]).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F44&w=96&q=100');
    expect(images[0]).toHaveAttribute('alt', 'Megamenu thumb');
    expect(images[1]).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F44&w=96&q=100');
    expect(images[1]).toHaveAttribute('alt', 'Megamenu thumb');
  });



  it('does not render any links if data is empty or undefined', () => {
    const { container } = render(<Menucategory2card data={[]} />);
    const linkElements = container.querySelectorAll('a');
    expect(linkElements.length).toBe(0);
  });

  it('does not render any category title if "L2 Text" is not found', () => {
    const noCategoryData = [
      {
        flagNavItemStyle: 'Other',
        navTitle: 'Link 1',
        navUrl: 'https://example.com/1',
        navCtaTarget: false,
        navIcon: { url: 'https://via.placeholder.com/44' },
      },
    ];

    render(<Menucategory2card data={noCategoryData} />);

    const titleElement = screen.queryByText('Category Title');
    expect(titleElement).not.toBeInTheDocument();
  });
});
