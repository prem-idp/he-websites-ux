import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./headercomponents";

jest.mock("../topnav/megamenucomponents", () =>
  jest.fn(() => <div data-testid="megamenu">Megamenu</div>)
);
jest.mock("./search-pod/header-search", () =>
  jest.fn(() => <div data-testid="search">Search Component</div>)
);
jest.mock("./user/user", () =>
  jest.fn(() => <div data-testid="user">User Component</div>)
);
jest.mock("./shortlisted/shortlisted", () =>
  jest.fn(() => <div data-testid="shortlisted">Shortlisted Component</div>)
);
describe("Header Component", () => {
  const mockData = {
    data: {
      contentData: {
        items: [{ websiteLogo: { url: "/logo.png" } }],
      },
    },
  };

  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the header with logo", () => {
    render(<Header data={mockData} />);
    const logo = screen.getByAltText("Whatuni Logo");
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute("src")).toContain(
      encodeURIComponent(mockData.data.contentData.items[0].websiteLogo.url)
    );
  });
  it("should toggle the Search component when clicking the search icon", async () => {
    render(<Header data={mockData} />);

    const searchIcon = screen.getByLabelText("Search");

    fireEvent.click(searchIcon);

    await waitFor(() => {
      expect(screen.getByTestId("search")).toBeInTheDocument();
    });

    fireEvent.mouseDown(document);

    await waitFor(() => {
      expect(screen.queryByTestId("search")).not.toBeInTheDocument();
    });
  });

  it("should toggle the User component when clicking the user icon", () => {
    render(<Header data={mockData} />);

    const userIcon = screen.getByLabelText("User");
    fireEvent.click(userIcon);
    expect(screen.getByTestId("user")).toBeInTheDocument();

    fireEvent.click(userIcon);
    expect(screen.queryByTestId("user")).not.toBeInTheDocument();
  });

  it("should toggle the Shortlist component when clicking the shortlist icon", () => {
    render(<Header data={mockData} />);

    const shortlistIcon = screen.getByLabelText("Shortlist");
    fireEvent.click(shortlistIcon);
    expect(screen.getByTestId("shortlisted")).toBeInTheDocument();

    fireEvent.click(shortlistIcon);
    expect(screen.queryByTestId("shortlisted")).not.toBeInTheDocument();
  });
});
