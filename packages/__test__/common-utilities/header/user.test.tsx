import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "@packages/shared-components/common-utilities/header/user/user";
import { before } from "node:test";
// import Link from 'next/link';

describe("User Component", () => {
  beforeEach(() => {
    render(<User />);
  })
  it("renders the user menu", () => {
    render(<User />);

    // Check if the menu is rendered
    expect(screen.getByRole("menu")).toBeInTheDocument();
  })
  it("renders the user menu with all items", () => {
    render(<User />);

    // Check if menu items are rendered
    expect(screen.getByText("My profile")).toBeInTheDocument();
    expect(screen.getByText("Favourites")).toBeInTheDocument();
    expect(screen.getByText("Profile item")).toBeInTheDocument();
    expect(screen.getByText("Log out")).toBeInTheDocument();
  });

});
