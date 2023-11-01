import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact component test cases", () => {
  it("Should have heading", () => {
    render(<Contact />);

    const headings = screen.getAllByRole("heading");

    //Assertion
    expect(headings.length).toBe(2);
  });

  it("Should have 2 imput boxes", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    //Assertion
    expect(inputs.length).toBe(2);
  });

  it("Should have support email id", () => {
    render(<Contact />);

    const email = screen.getByText(
      "You reach out to us on support@foodapp.com"
    );

    //Assertion
    expect(email).toBeInTheDocument();
  });
});
