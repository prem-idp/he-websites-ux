import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";

describe("Footer Component", () => {
  test("Correct rendering of component", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            /* mock data here */
          }),
      })
    );
    await waitFor(() => render(<Footer />));
  });
});
