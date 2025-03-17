import { render, screen } from "@testing-library/react";
import PrPageTopSection from "@packages/shared-components/pr-page/PrTopSection/Pr-top-section";

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

jest.mock("next/link", () => ({
    __esModule: true,
    default: ({ children, ...props }: { children: React.ReactNode; href: string }) => (
        <a {...props}>{children}</a>
    ),
}));


jest.mock("@packages/shared-components/common-utilities/user-favourite/user-favourite", () => () => <div data-testid="user-favourite" />);
jest.mock("../UserFavouriteTopSection", () => () => <div data-testid="user-favourite-top-section" />);

describe("PrPageTopSection Component", () => {
    test("renders correctly with data", () => {
        const mockData = {
            searchResultsList: [
                {
                    collegeMedia: { ipCollegeLogo: "/logo.png" },
                    distanceInMiles: 5,
                    collegeDisplayName: "Test University",
                    reviewCount: 120,
                    rating: 4.5,
                    collegeTextKey: "Test University",
                    collegeId: "1234",
                    wuscaRanking: 10,
                },
            ],
            totalCourseCount: 50,
        };

        render(<PrPageTopSection searchResultlist={mockData} />);

        expect(screen.getByText("Test University")).toBeInTheDocument();
        expect(screen.getByText("50 courses available")).toBeInTheDocument();
        expect(screen.getByText("120 reviews")).toBeInTheDocument();
        expect(screen.getByText("4.5")).toBeInTheDocument();
    });

    test("renders empty fragment when no data is provided", () => {
        const { container } = render(<PrPageTopSection searchResultlist={{}} />);
        expect(container.firstChild).toBeNull();
    });
});
