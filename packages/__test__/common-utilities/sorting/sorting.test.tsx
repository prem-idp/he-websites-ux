import { render, screen, fireEvent } from '@testing-library/react';
import SortingFilter from "@packages/shared-components/sr-page/sorting-filter/sorting";
import '@testing-library/jest-dom';

describe('SortingFilter Component', () => {
  const mockSortParam = {
    filterCookieParam: {
      sort: 'R'
    },
    param: {
      sort: 'R'
    }
  };

  beforeEach(() => {
    // Mock window.location
    delete window.location;
    window.location = {
      ...window.location,
      href: 'http://localhost:3000/search',
      origin: 'http://localhost:3000',
      pathname: '/search',
      reload: jest.fn()
    };

    // Mock window.history
    window.history.replaceState = jest.fn();
  });

  test('toggles sort options when clicked', () => {
    render(<SortingFilter sortParam={mockSortParam} />);
    
    const sortButton = screen.getByText('Sort:').closest('div');
    fireEvent.click(sortButton);
    
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
    test('returns "Recommended" for unknown value', () => {
      render(<SortingFilter sortParam={{ 
        param: { sort: 'UNKNOWN' },
        filterCookieParam: {}
      }} />);
      
      expect(screen.getByText('Recommendded')).toBeInTheDocument();
    });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
