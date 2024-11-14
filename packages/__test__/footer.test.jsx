import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";
const mockdata = {
  footerNavBtmCollection: {
    items: [
      {
        navTitle: "© 2007-2024 IDP Connect Ltd. All rights reserved",
        navUrl: null,
      },
    ],
  },
  navApplinksCollection: {
    items: [
      {
        primaryCtaLabel: "App store",
        primaryCtaUrl: "https://whatuni.go.link/?adj_t=cark98y",
      },
      {
        primaryCtaLabel: "Play store",
        primaryCtaUrl: "https://whatuni.go.link/?adj_t=cark98y",
      },
    ],
  },
  footerNavCollection: {
    items: [
      {
        navTitle: "Quick links",
        navChildC1Collection: {
          items: [
            {
              navTitle: "Student Choice Awards",
              navUrl: "/student-awards-winners/",
              navCtaTarget: "Open in same tab",
            },

            {
              navTitle: "Cookies Notice",
              navUrl: "/degrees/cookies.html",
              navCtaTarget: null,
            },
          ],
        },
      },
      {
        navTitle: "Browse",
        navChildC1Collection: {
          items: [
            {
              navTitle: "Courses",
              navUrl: "/degrees/courses/",
              navCtaTarget: "Open in same tab",
            },
            {
              navTitle: "Universities",
              navUrl: "/degrees/find-university/",
              navCtaTarget: "Open in same tab",
            },
          ],
        },
      },
      {
        navTitle: "Popular subjects",
        navChildC1Collection: {
          items: [
            {
              navTitle: "Acting",
              navUrl: "/degree-courses/search?subject=acting",
              navCtaTarget: "Open in same tab",
            },
            {
              navTitle: "Physics",
              navUrl: "/degree-courses/search?subject=physics",
              navCtaTarget: "Open in same tab",
            },
          ],
        },
      },
    ],
  },
};
describe("Footer Component", () => {
  test("Correct rendering of component", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            footerData: mockdata,
          }),
      })
    );
    await waitFor(() => render(<Footer />));
  });
});
