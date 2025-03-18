import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./";
import { vi } from "vitest";

describe("Button Component", () => {
  it("renders the button with children", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(screen.getByText("Click Me")).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies passed props correctly", () => {
    render(
      <Button color="primary" variant="contained">
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toHaveClass("MuiButton-containedPrimary");
  });

  it("triggers the onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
