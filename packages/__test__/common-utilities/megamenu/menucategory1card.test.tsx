import React from 'react';
import { render, screen } from '@testing-library/react';
import Menucategory1card from '@packages/shared-components/common-utilities/megamenu/menucategory1card';
import '@testing-library/jest-dom';
describe('Menucategory1card', () => {
  it('renders the category title when "L2 Text" style is found in data', () => {
    const data = [
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title' },
      { flagNavItemStyle: 'Other', navTitle: 'Link 1', navUrl: 'https://example.com/1' },
    ];
    render(<Menucategory1card data={data} />);
    expect(screen.getByText('Category Title')).toBeInTheDocument();
  });

  it('renders all the links except "L2 Text"', () => {
    const data = [
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title' },
      { flagNavItemStyle: 'Other', navTitle: 'Link 1', navUrl: 'https://example.com/1' },
      { flagNavItemStyle: 'Other', navTitle: 'Link 2', navUrl: 'https://example.com/2' },
    ];
    render(<Menucategory1card data={data} />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByText('Link 1')).toBeInTheDocument();
    expect(screen.getByText('Link 2')).toBeInTheDocument();
  });

  it('handles empty data', () => {
    render(<Menucategory1card data={[]} />);
    expect(screen.queryByText('Category Title')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('handles data with no "L2 Text" style', () => {
    const data = [
      { flagNavItemStyle: 'Other', navTitle: 'Link 1', navUrl: 'https://example.com/1' },
      { flagNavItemStyle: 'Other', navTitle: 'Link 2', navUrl: 'https://example.com/2' },
    ];
    render(<Menucategory1card data={data} />);
    expect(screen.queryByText('Category Title')).not.toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('handles data with multiple "L2 Text" styles (should only render the first one)', () => {
    const data = [
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title 1' },
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title 2' },
      { flagNavItemStyle: 'Other', navTitle: 'Link 1', navUrl: 'https://example.com/1' },
    ];
    render(<Menucategory1card data={data} />);
    expect(screen.getByText('Category Title 1')).toBeInTheDocument();
    expect(screen.queryByText('Category Title 2')).not.toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  it('handles data with no links (i.e. all items have "L2 Text" style)', () => {
    const data = [
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title 1' },
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title 2' },
    ];
    render(<Menucategory1card data={data} />);
    expect(screen.getByText('Category Title 1')).toBeInTheDocument();
    expect(screen.queryByText('Category Title 2')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('handles data with links that have no URL', () => {
    const data = [
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title' },
      { flagNavItemStyle: 'Other', navTitle: 'Link 1' },
    ];
    render(<Menucategory1card data={data} />);
    expect(screen.getByText('Category Title')).toBeInTheDocument();
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  // it('handles data with links that have no title', () => {
  //   const data = [
  //     { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title' },
  //     { flagNavItemStyle: 'Other', navUrl: 'https://example.com/1' },
  //   ];
  //   render(<Menucategory1card data={data} />);
  //   expect(screen.getByText('Category Title')).toBeInTheDocument();
  //   expect(screen.queryAllByRole('link')).toHaveLength(0);
  // });

  it('handles data with links that have a target of "_blank"', () => {
    const data = [
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title' },
      { flagNavItemStyle: 'Other', navTitle: 'Link 1', navUrl: 'https://example.com/1', navCtaTarget: 'Open in new tab' },
    ];
    render(<Menucategory1card data={data} />);
    expect(screen.getByText('Category Title')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('handles data with links that have a target of "_parent"', () => {
    const data = [
      { flagNavItemStyle: 'L2 Text', navTitle: 'Category Title' },
      { flagNavItemStyle: 'Other', navTitle: 'Link 1', navUrl: 'https://example.com/1', navCtaTarget: 'Open in current tab' },
    ];
    render(<Menucategory1card data={data} />);
    expect(screen.getByText('Category Title')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('target', '_parent');
    expect(screen.getByRole('link')).not.toHaveAttribute('rel');
  });
});