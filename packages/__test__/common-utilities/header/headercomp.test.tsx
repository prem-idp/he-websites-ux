import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@packages/shared-components/common-utilities/header/headercomponents';
import { fetchAuthSession } from 'aws-amplify/auth';
import emitter from '@packages/lib/eventEmitter/eventEmitter';

// Mock the dependencies
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/test-path',
}));

jest.mock('aws-amplify/auth', () => ({
  fetchAuthSession: jest.fn(),
}));

jest.mock('@packages/lib/eventEmitter/eventEmitter', () => ({
  on: jest.fn(),
  off: jest.fn(),
  emit: jest.fn(),
}));

// Mock data
const mockProps = {
  topnav_data: {
    data: {
      contentData: {
        items: [
          {
            websiteLogo: {
              url: '/test-logo.png',
            },
          },
        ],
      },
    },
  },
  course_data: {},
  uni_data: {},
};

describe('Header Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    
    // Mock window innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    // Mock document.cookie
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'USER_INITIAL=AB; USER_FAV_BASKET_COUNT=5',
    });
  });

  // Test component rendering
  test('renders header component correctly', () => {
    render(<Header {...mockProps} />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByAltText('imageplaceholder')).toBeInTheDocument();
  });

  // Test authentication
  test('handles authentication successfully', async () => {
    (fetchAuthSession as jest.Mock).mockResolvedValue({
      tokens: {
        accessToken: 'test-token',
        idToken: 'test-id-token',
      },
    });

    jest.replaceProperty(process, 'env', { PROJECT: 'Whatuni' });

    await act(async () => {
      render(<Header {...mockProps} />);
    });

    expect(fetchAuthSession).toHaveBeenCalled();
  });

  // Test authentication failure
  test('handles authentication failure gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    (fetchAuthSession as jest.Mock).mockRejectedValue(new Error('Auth failed'));

    jest.replaceProperty(process, 'env', { PROJECT: 'Whatuni' });

    await act(async () => {
      render(<Header {...mockProps} />);
    });

    expect(consoleSpy).toHaveBeenCalledWith('Error fetching user:', expect.any(Error));
    consoleSpy.mockRestore();
  });

  // Test mobile toggle
  test('toggles mobile menu when button is clicked', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 768, // Mobile viewport
    });

    render(<Header {...mockProps} />);
    const toggleButton = screen.getByLabelText('Mobile Toggle');
    
    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('overflow-y-hidden')).toBeTruthy();
    
    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('overflow-y-hidden')).toBeFalsy();
  });

  // Test right menu actions
  test('handles right menu actions correctly', () => {
    render(<Header {...mockProps} />);
    
    // Simulate search click
    act(() => {
      emitter.emit('rightMenuActionclose', 'SEARCH');
    });
    
    // Check body class for overflow
    expect(document.body.classList.contains('overflow-y-hidden')).toBeTruthy();
  });

  // Test responsive behavior
  test('responds to window resize events', () => {
    render(<Header {...mockProps} />);

    // Simulate window resize to mobile view
    act(() => {
      window.innerWidth = 768;
      window.dispatchEvent(new Event('resize'));
    });

    // Simulate window resize to desktop view
    act(() => {
      window.innerWidth = 1200;
      window.dispatchEvent(new Event('resize'));
    });
  });

  // Test click outside behavior
  test('closes menus when clicking outside', () => {
    render(<Header {...mockProps} />);
    
    // Simulate click outside
    fireEvent.mouseDown(document.body);
    
    // Verify that menus are closed
    expect(document.body.classList.contains('overflow-y-hidden')).toBeFalsy();
  });

  // Test cookie handling
  test('reads cookie values correctly', () => {
    jest.replaceProperty(process, 'env', { PROJECT: 'Whatuni' });
    
    render(<Header {...mockProps} />);
    
    // Verify that cookie values are read
    expect(document.cookie).toContain('USER_INITIAL=AB');
    expect(document.cookie).toContain('USER_FAV_BASKET_COUNT=5');
  });

  // Test cleanup
  test('cleans up event listeners on unmount', () => {
    const { unmount } = render(<Header {...mockProps} />);
    
    unmount();
    
    expect(emitter.off).toHaveBeenCalled();
  });

  // Test logo rendering
  test('renders logo with correct attributes', () => {
    render(<Header {...mockProps} />);
    
    const logo = screen.getByAltText('imageplaceholder');
    expect(logo).toHaveAttribute('src', expect.stringContaining('/test-logo.png'));
    expect(logo).toHaveAttribute('width', '70');
    expect(logo).toHaveAttribute('height', '78');
  });

  // Test fallback logo
  test('renders fallback logo when url is not provided', () => {
    const propsWithoutLogo = {
      ...mockProps,
      topnav_data: {
        data: {
          contentData: {
            items: [{ websiteLogo: { url: '' } }],
          },
        },
      },
    };

    render(<Header {...propsWithoutLogo} />);
    
    const logo = screen.getByAltText('imageplaceholder');
    expect(logo).toHaveAttribute('src', expect.stringContaining('/static/assets/images/imageplaceholder.png'));
  });
});
