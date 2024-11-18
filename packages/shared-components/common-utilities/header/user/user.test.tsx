import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import User from './user';
// import Link from 'next/link';


describe('User Component', () => {
  it('renders the user menu with all items', () => {
    render(<User />);

    // Check if menu items are rendered
    expect(screen.getByText('My profile')).toBeInTheDocument();
    expect(screen.getByText('Favourites')).toBeInTheDocument();
    expect(screen.getByText('Profile item')).toBeInTheDocument();
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });

  
 
});
