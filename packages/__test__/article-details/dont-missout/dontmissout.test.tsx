import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dontmissout from "@packages/shared-components/article-details/dont-missout/dontmissout";

describe("Dontmissout Component", () => {
  test("renders the component correctly", () => {
    render(<Dontmissout />);
    
    // Check for title
    expect(screen.getByText(/Don't miss out!/i)).toBeInTheDocument();
    
    // Check for input placeholders
    expect(screen.getByPlaceholderText("First name*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last name*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address*")).toBeInTheDocument();
  });

  test("shows error messages for empty fields on submit", () => {
    render(<Dontmissout />);
    
    const submitButton = screen.getByText(/Get free newsletters/i);
    fireEvent.click(submitButton);
    
    // Check for error messages
    expect(screen.getByText(/Please enter your first name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your last name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your email address/i)).toBeInTheDocument();
    expect(
      screen.getByText(/What year would you like to start your new course/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Please agree to our terms and conditions/i)
    ).toBeInTheDocument();
  });

  test("updates state when inputs are filled and submits successfully", () => {
    render(<Dontmissout />);
    
    // Fill out inputs
    fireEvent.change(screen.getByPlaceholderText("First name*"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Last name*"), { target: { value: "Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Email address*"), { target: { value: "john.doe@example.com" } });
    fireEvent.click(screen.getByLabelText("2025"));
    fireEvent.click(screen.getByText(/I confirm I’m over 13/i));
    
    // Submit the form
    const submitButton = screen.getByText(/Get free newsletters/i);
    fireEvent.click(submitButton);
    
    // Check that no errors are displayed
    expect(screen.queryByText(/Please enter your first name/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Please enter your last name/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Please enter your email address/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/What year would you like to start your new course/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Please agree to our terms and conditions/i)).not.toBeInTheDocument();
  });

  // test("displays a success message upon successful submission", () => {
  //   render(<Dontmissout />);
    
  //   // Fill out inputs
  //   fireEvent.change(screen.getByPlaceholderText("First name*"), { target: { value: "John" } });
  //   fireEvent.change(screen.getByPlaceholderText("Last name*"), { target: { value: "Doe" } });
  //   fireEvent.change(screen.getByPlaceholderText("Email address*"), { target: { value: "john.doe@example.com" } });
  //   fireEvent.click(screen.getByLabelText("2025"));
  //   fireEvent.click(screen.getByText(/I confirm I’m over 13/i));
    
  //   // Submit the form
  //   const submitButton = screen.getByText(/Get free newsletters/i);
  //   fireEvent.click(submitButton);
    
  //   // Check success message
  //   expect(screen.getByText(/Thanks, we’ll be in touch soon/i)).toBeInTheDocument();
  // });
});
