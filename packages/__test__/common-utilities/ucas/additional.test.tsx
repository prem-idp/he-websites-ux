import { render, screen, fireEvent } from "@testing-library/react";
import AddQualification from "@packages/shared-components/common-utilities/popups/ucas-calculator/additional-qual"; // Assuming this is the path to the component
import React from "react";
import "@testing-library/jest-dom";
describe("AddQualification Component", () => {
  const mockRemoveQual = jest.fn();
  const mockSetQual = jest.fn();
  const mockSetUcasPoint = jest.fn();

  const mockQual = [
    {
      SelectedLevel: "A Level",
      type: "single-select",
      gradeArray: [
        { key: "A", value: "A" },
        { key: "B", value: "B" },
      ],
      qualId: null,
      userEntryPoint: "",
      maxPoint: 0,
      maxTotalPoint: 0,
      podSpecificPoints: 0,
    },
  ];

  const mockUcasPoint = 20;
  const mockUcasGradeData = [
    {
      qualification: "A Level",
      gradeOptions: "A,B,C",
      maxPoint: "56",
      maxTotalPoint: "168",
      qualId: 1,
      template: "plus-minus",
    },
    {
      qualification: "BTEC",
      gradeOptions: "Pass, Merit, Distinction",
      maxPoint: "48",
      maxTotalPoint: "144",
      qualId: 2,
      template: "credit-selector",
    },
  ];

  test("should render dropdown with qualification options and handle click", () => {
    render(
      <AddQualification
        removeQual={mockRemoveQual}
        qualOrder="First"
        ucasGradeData={mockUcasGradeData}
        ucasPoint={mockUcasPoint}
        setUcasPoint={mockSetUcasPoint}
        indexPosition={0}
        qual={mockQual}
        setQual={mockSetQual}
      />
    );

    const dropdownButton = screen.getByText("A Level");
    fireEvent.click(dropdownButton);

    const items = screen.queryAllByText("A Level");
    expect(items.length).toBeGreaterThan(0); // Ensure "A Level" appears
    expect(items[0]).toBeInTheDocument(); // Confirm the item is clickable

    const btecItem = screen.getByText("BTEC");
    expect(btecItem).toBeInTheDocument(); // Ensure "BTEC" exists

    fireEvent.click(items[0]);

    // Check if setQual was called
    expect(mockSetQual).toHaveBeenCalledTimes(1); // Ensure setQual was called once
    expect(mockSetQual).toHaveBeenCalledWith(expect.any(Function)); // Adjust this based on actual function expected
  });

  test("should handle delete qualification click", () => {
    render(
      <AddQualification
        removeQual={mockRemoveQual}
        qualOrder="First"
        ucasGradeData={mockUcasGradeData}
        ucasPoint={mockUcasPoint}
        setUcasPoint={mockSetUcasPoint}
        indexPosition={0}
        qual={mockQual}
        setQual={mockSetQual}
      />
    );

    // Query for the image based on alt text or src, depending on the icon.
    const deleteIcon = screen.getByAltText(""); // Or use getBySrc('/static/assets/icons/ucas-down-arrow.svg');
    fireEvent.click(deleteIcon);

    expect(mockRemoveQual).toHaveBeenCalledTimes(1); // Check if the remove function is called

    // Verify the points are updated
    expect(mockSetUcasPoint).toHaveBeenCalledWith(
      mockUcasPoint - mockQual[0]?.podSpecificPoints
    );
  });
});
