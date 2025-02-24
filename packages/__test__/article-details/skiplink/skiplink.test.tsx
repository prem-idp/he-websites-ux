import { render, screen, fireEvent } from '@testing-library/react';
import Skiplink from '@packages/shared-components/article-details/skiplink/skiplink';

// Mock the Contentful live preview hook
jest.mock('@contentful/live-preview/react', () => ({
  useContentfulLiveUpdates: (data: any) => data
}));

describe('Skiplink Component', () => {
  const mockData = {
    propsdata: {
      skipLinks: {
        sys: { id: 'test-id' },
        skiplinkkTitle: 'Test Skip Links',
        anchorLinksCollection: {
          items: [
            {
              sys: { id: 'link1' },
              urlLabel: 'First Link',
              moreLinkUrl: '/first',
              moreLinkTarget: 'Same Tab'
            },
            {
              sys: { id: 'link2' },
              urlLabel: 'Second Link',
              moreLinkUrl: '/second',
              moreLinkTarget: 'New Tab'
            }
          ]
        }
      }
    },
    preview: false
  };

  it('renders without crashing', () => {
    render(<Skiplink {...mockData} />);
  });

  // describe('Mobile View', () => {
  //   it('should initially render with closed menu', () => {
  //     render(<Skiplink {...mockData} />);
  //     expect(screen.queryByRole('list')).not.toBeInTheDocument();
  //   });

  //   it('should toggle menu when clicked', () => {
  //     render(<Skiplink {...mockData} />);
  //     const toggleButton = screen.getByText('Test Skip Links');

  //     // Click to open
  //     fireEvent.click(toggleButton);
  //     expect(screen.getAllByRole('list')).toBeTruthy();

  //     // Click to close
  //     fireEvent.click(toggleButton);
  //     expect(screen.queryByRole('list')).not.toBeInTheDocument();
  //   });

  //   it('should render burger menu icon', () => {
  //     render(<Skiplink {...mockData} />);
  //     const burgerMenu = document.querySelector('.burger-menu');
  //     expect(burgerMenu).toBeInTheDocument();
  //     expect(burgerMenu?.children.length).toBe(3); // 3 spans for burger menu
  //   });
  // });

  describe('Desktop View', () => {
    it('should render title correctly', () => {
      render(<Skiplink {...mockData} />);
      const title = screen.getAllByText('Test Skip Links');
      expect(title.length).toBeGreaterThan(0);
    });

    it('should render all links', () => {
      render(<Skiplink {...mockData} />);
      expect(screen.getAllByText('First Link')).toBeTruthy();
      expect(screen.getAllByText('Second Link')).toBeTruthy();
    });

    it('should apply correct styling to first link', () => {
      render(<Skiplink {...mockData} />);
      const firstLink = document.querySelector('.lg\\:flex li');
      expect(firstLink).toHaveClass('border-blue-400');
      expect(firstLink).toHaveClass('text-blue-400');
    });
  });

  // describe('Link Behavior', () => {
  //   it('should set correct target attributes for links', () => {
  //     render(<Skiplink {...mockData} />);
  //     const toggleButton = screen.getByText('Test Skip Links');
  //     fireEvent.click(toggleButton);

  //     const links = screen.getAllByRole('link');
  //     const sameTabLinks = links.filter(link => link.getAttribute('target') === '_self');
  //     const newTabLinks = links.filter(link => link.getAttribute('target') === '_blank');

  //     expect(sameTabLinks.length).toBeGreaterThan(0);
  //     expect(newTabLinks.length).toBeGreaterThan(0);
  //   });

  //   it('should render correct href values', () => {
  //     render(<Skiplink {...mockData} />);
  //     const toggleButton = screen.getByText('Test Skip Links');
  //     fireEvent.click(toggleButton);

  //     const links = screen.getAllByRole('link');
  //     expect(links[0]).toHaveAttribute('href', '/first');
  //     expect(links[1]).toHaveAttribute('href', '/second');
  //   });
  // });

  describe('Preview Mode', () => {
    const previewMockData = { ...mockData, preview: true };

    // it('should render ContentfulInspectorManager when preview is true', () => {
    //   render(<Skiplink {...previewMockData} />);
    //   // Check for ContentfulInspectorManager elements
    //   const inspectorElements = document.querySelectorAll('[data-test-id="contentful-inspector"]');
    //   expect(inspectorElements.length).toBeGreaterThan(0);
    // });

    it('should not render ContentfulInspectorManager when preview is false', () => {
      render(<Skiplink {...mockData} />);
      const inspectorElements = document.querySelectorAll('[data-test-id="contentful-inspector"]');
      expect(inspectorElements.length).toBe(0);
    });
  });
});
 