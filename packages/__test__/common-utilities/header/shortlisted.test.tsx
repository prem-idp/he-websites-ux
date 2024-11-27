import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shortlisted from '../../shared-components/common-utilities/header/shortlisted/shortlisted';

describe('Shortlisted Component', () => {
  it('renders all the list items with correct names and counts', () => {
    render(<Shortlisted />);

    // Check if the list items are rendered with correct text
    expect(screen.getByText('Favourites')).toBeInTheDocument();
    expect(screen.getByText('Courses')).toBeInTheDocument();
    expect(screen.getByText('Universities')).toBeInTheDocument();

    // Check if the counts are rendered correctly
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
