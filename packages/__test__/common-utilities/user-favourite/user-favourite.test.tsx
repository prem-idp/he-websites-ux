import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserFavourite from "@packages/shared-components/common-utilities/user-favourite/UserFavourite"
import { getCurrentUser } from "@aws-amplify/auth";
import { getUserFavourites, addRemoveFavourites } from "@packages/lib/utlils/userfavourite";
import '@testing-library/jest-dom';

// Mock the AWS Amplify and utility functions
jest.mock("@aws-amplify/auth", () => ({
  getCurrentUser: jest.fn()
}));

jest.mock("@packages/lib/utlils/userfavourite", () => ({
  getUserFavourites: jest.fn(),
  addRemoveFavourites: jest.fn()
}));

describe('UserFavourite Component', () => {
  const mockFavouriteProps = {
    contentId: "123",
    contentName: "Test Course",
    contentType: "course",
    exceedData: jest.fn()
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should render favourite button', () => {
    render(<UserFavourite favouriteProps={mockFavouriteProps} />);
    expect(screen.getByTestId("favourite")).toBeInTheDocument();
  });

  test('should redirect to register page when user is not logged in', async () => {
    const mockLocation = window.location;
    delete window.location;
    window.location = { href: '' } as any;

    (getCurrentUser as jest.Mock).mockRejectedValue(new Error('No user'));
    
    render(<UserFavourite favouriteProps={mockFavouriteProps} />);
    const favouriteButton = screen.getByTestId("favourite");
    
    await fireEvent.click(favouriteButton);
    
    expect(window.location.href).toBe('/register/');
    
    window.location = mockLocation;
  });

  test('should load user favourites on mount when user is logged in', async () => {
    const mockUser = { username: 'testuser' };
    const mockFavourites = [
      { fav_id: '123', fav_type: 'course' }
    ];

    (getCurrentUser as jest.Mock).mockResolvedValue(mockUser);
    (getUserFavourites as jest.Mock).mockResolvedValue(mockFavourites);

    render(<UserFavourite favouriteProps={mockFavouriteProps} />);

    await waitFor(() => {
      expect(getUserFavourites).toHaveBeenCalled();
    });
  });

  test('should add item to favourites when clicked', async () => {
    const mockUser = { username: 'testuser' };
    (getCurrentUser as jest.Mock).mockResolvedValue(mockUser);
    (getUserFavourites as jest.Mock).mockResolvedValue([]);
    (addRemoveFavourites as jest.Mock).mockResolvedValue({ message: 'Added course' });

    render(<UserFavourite favouriteProps={mockFavouriteProps} />);
    
    const favouriteButton = screen.getByTestId("favourite");
    await fireEvent.click(favouriteButton);

    await waitFor(() => {
      expect(addRemoveFavourites).toHaveBeenCalledWith([{
        contentType: mockFavouriteProps.contentType,
        contentId: mockFavouriteProps.contentId,
        contentName: mockFavouriteProps.contentName,
        inputFlag: true
      }]);
    });
  });
  test('should show tooltip when item is added to favourites', async () => {
    const mockUser = { username: 'testuser' };
    (getCurrentUser as jest.Mock).mockResolvedValue(mockUser);
    (getUserFavourites as jest.Mock).mockResolvedValue([]);
    (addRemoveFavourites as jest.Mock).mockResolvedValue({ message: 'Added course' });

    render(<UserFavourite favouriteProps={mockFavouriteProps} />);
    
    const favouriteButton =  screen.getByTestId("favourite");
    await fireEvent.click(favouriteButton);

    await waitFor(() => {
      expect(screen.getByText('We have added this to your comparison')).toBeInTheDocument();
    });
  });

  test('should handle limit exceeded case', async () => {
    const mockUser = { username: 'testuser' };
    (getCurrentUser as jest.Mock).mockResolvedValue(mockUser);
    (getUserFavourites as jest.Mock).mockResolvedValue([]);
    (addRemoveFavourites as jest.Mock).mockResolvedValue({ message: 'Limit exceeded' });

    render(<UserFavourite favouriteProps={mockFavouriteProps} />);
    
    const favouriteButton = screen.getByTestId("favourite");
    await fireEvent.click(favouriteButton);

    await waitFor(() => {
      expect(mockFavouriteProps.exceedData).toHaveBeenCalledWith(true);
    });
  });
  test('should handle error when adding/removing favourites', async () => {
    const mockUser = { username: 'testuser' };
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    
    (getCurrentUser as jest.Mock).mockResolvedValue(mockUser);
    (getUserFavourites as jest.Mock).mockResolvedValue([]);
    (addRemoveFavourites as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<UserFavourite favouriteProps={mockFavouriteProps} />);
    
    const favouriteButton = screen.getByTestId('favourite');
    await fireEvent.click(favouriteButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error toggling favorite:', expect.any(Error));
    });

    consoleSpy.mockRestore();
  });


});
