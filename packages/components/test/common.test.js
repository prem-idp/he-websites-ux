import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../card";
test("PGS site TEST", () => {
  render(<Card />);
  expect(screen.getByText("Its a ummy card component")).toBeInTheDocument();
});
