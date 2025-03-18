import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReusableForm from "./index";
import userEvent from "@testing-library/user-event";

// Mock form submission function
const mockOnSubmit = jest.fn();

const formFields: FormField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "age",
    label: "Age",
    type: "number",
  },
];

type FieldType = "text" | "email" | "number";

interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
}

interface ReusableFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
  columns?: number; // Number of columns for layout
}

describe("ReusableForm", () => {
  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it("renders form fields", () => {
    render(<ReusableForm fields={formFields} onSubmit={mockOnSubmit} />);

    // Check if fields are rendered
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Age")).toBeInTheDocument();
  });

  it("shows validation error for required fields", async () => {
    render(<ReusableForm fields={formFields} onSubmit={mockOnSubmit} />);

    // Submit the form without filling any fields
    fireEvent.click(screen.getByText("Submit"));

    // Wait for validation error messages
    await waitFor(() =>
      expect(screen.getByText("First Name is required")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText("Email is required")).toBeInTheDocument()
    );
  });

  it("shows validation error for invalid email format", async () => {
    render(<ReusableForm fields={formFields} onSubmit={mockOnSubmit} />);

    // Enter an invalid email
    userEvent.type(screen.getByLabelText(/Email/i), "invalid-email");

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    // Wait for the validation error message
    await waitFor(() =>
      expect(screen.getByText("Invalid email address")).toBeInTheDocument()
    );
  });
});
