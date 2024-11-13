import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Discovercomponents from "@packages/shared-components/home/discover/discovercomponents";
import Discoverslidercomponents1 from "@packages/shared-components/common-utilities/slider/discoverslidercomponents";
import React from 'react';

jest.mock('swiper/react', () => ({
    Swiper: jest.fn(({children}) => <>{children}</>),
    SwiperSlide: jest.fn(({children}) => <>{children}</>),
  }));
  
  jest.mock('swiper/modules', () => ({
    FreeMode: jest.fn(),
    Navigation: jest.fn(),
    Pagination: jest.fn(),
  }));
  
  // CSS Imports Mock
  jest.mock('swiper/css', () => {});
  jest.mock('swiper/css/navigation', () => {});
  jest.mock('swiper/css/pagination', () => {});

  //consts
  const discoverPodList = [{heading: "universities", subHeading: "Pick your perfect uni", url: "", class: "block bg-primary-100 rounded-[8px] overflow-hidden", img: "/assets/images/discover/discover-feature-image1x3x.png"}, 
    {heading: "courses", subHeading: "Looking for courses?", url: "", class: "block bg-secondary-200 rounded-[8px] overflow-hidden", img: "/assets/images/discover/discover-feature-image2x3x.png"},
     {heading: "career", subHeading: "Take our careers quiz", url: "", class: "block bg-tertiary-100 rounded-[8px] overflow-hidden", img: "/assets/images/discover/discover-feature-image2x3x.png"}, 
     {heading: "Subject guides", subHeading: "Find out what to study", url: "", class: "block bg-primary-100 rounded-[8px] overflow-hidden", img: "/assets/images/discover/discover-feature-image3x3x.png"},
      {heading: "open days", subHeading: "Find an open day", url: "", class: "block bg-secondary-200 rounded-[8px] overflow-hidden", img: "/assets/images/discover/discover-feature-image2x3x.png"},
       {heading: "app", subHeading: "Download the app", url: "", class: "block bg-tertiary-100 rounded-[8px] overflow-hidden", img: "/assets/images/discover/discover-feature-image1x3x.png"}]


describe("Discover pod test cases", () => {

    //
    test("Render discover pod", () => {
        render(<Discovercomponents/>);
        expect(screen.getByTestId("discoverHeading")).toBeInTheDocument();
        expect(screen.getByTestId("discoverSubHeading")).toBeInTheDocument();
        expect(screen.getByTestId("discoverViewMore")).toBeInTheDocument();
    });

    //
    test("The count of slider created for desktop device", () => {
        render(<Discovercomponents  />);
        expect(screen.getAllByTestId("discovercardDesktop").length).toBe(6);
    });

    //
    test("The count of slider created for mobile device", () => {
        
        const resizeSpy = jest.spyOn(window, 'dispatchEvent');
        window.innerWidth = 480;
        // Trigger the window resize event.
        global.dispatchEvent(new Event('resize'));

        render(<Discovercomponents />);
        expect(screen.getAllByTestId("discovercardMobile").length).toBe(6);
    });
    
})