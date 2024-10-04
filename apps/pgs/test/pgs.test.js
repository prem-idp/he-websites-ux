import Annoucement from "../../pgs/src/components/sr-page-components/announcement-component/bottom-announcement";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("PGS site TEST", () => {
  render(<Annoucement />);
  expect(screen.getByText("Welcome To IDP world")).toBeInTheDocument();
});
