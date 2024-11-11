import { render, screen, fireEvent } from "@testing-library/react";
import Universities from "./universities";
import "@testing-library/jest-dom";

describe("Universities Component", () => {
  beforeEach(() => {
    render(<Universities />);
  });

  test("renders the search input and button", () => {
    render(<Universities />);

    // Check if the input and search button are rendered
    expect(screen.getByPlaceholderText("University name")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });
});
