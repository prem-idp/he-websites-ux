import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MaxMinInputBox from "@packages/shared-components/common-utilities/popups/ucas-calculator/max-min-input";
describe("MaxMinInputBox Component", () => {
  const mockSetQual = jest.fn();
  const mockSetUcasPoint = jest.fn();
  const indexPosition = 1;
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders both input fields and labels", () => {
    render(
      <MaxMinInputBox
        indexPosition={indexPosition}
        setQual={mockSetQual}
        setUcasPoint={mockSetUcasPoint}
      />
    );
    expect(screen.getByLabelText("Minimum points")).toBeInTheDocument();
    expect(screen.getByLabelText("Maximum points")).toBeInTheDocument();
    const inputs = screen.getAllByPlaceholderText("Enter UCAS points");
    expect(inputs.length).toBe(2);
  });

  test("updates minimum points and calls setQual correctly", () => {
    render(
      <MaxMinInputBox
        indexPosition={indexPosition}
        setQual={mockSetQual}
        setUcasPoint={mockSetUcasPoint}
      />
    );
    const minInput = screen.getByLabelText("Minimum points");
    fireEvent.change(minInput, { target: { value: "50" } });
    expect(mockSetQual).toHaveBeenCalledWith(expect.any(Function));
    const mockPrev = [
      { min: 10, max: 20 },
      { min: 0, max: 0 },
    ];
    const updateFn = mockSetQual.mock.calls[0][0];
    const updatedState = updateFn(mockPrev);
    expect(updatedState[indexPosition]).toEqual({ min: 50, max: 0 });
  });

  test("updates maximum points and calls setQual and setUcasPoint correctly", () => {
    render(
      <MaxMinInputBox
        indexPosition={indexPosition}
        setQual={mockSetQual}
        setUcasPoint={mockSetUcasPoint}
      />
    );
    const maxInput = screen.getByLabelText("Maximum points");
    fireEvent.change(maxInput, { target: { value: "100" } });
    expect(mockSetQual).toHaveBeenCalledWith(expect.any(Function));
    expect(mockSetUcasPoint).toHaveBeenCalledWith(100);
    const mockPrev = [
      { min: 10, max: 20 },
      { min: 0, max: 0 },
    ];
    const updateFn = mockSetQual.mock.calls[0][0];
    const updatedState = updateFn(mockPrev);
    expect(updatedState[indexPosition]).toEqual({
      min: 0,
      max: 100,
      podSpecificPoints: 100,
    });
  });
});
