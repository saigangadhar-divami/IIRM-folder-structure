// import { describe, it, expect, vi, beforeEach } from 'vitest';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { MemoryMemoryRouter } from 'react-router-dom'; // Import MemoryMemoryRouter
// import SignUp from './index';
// import '@testing-library/jest-dom';

// describe('SignUp Component', () => {
//   beforeEach(() => {
//     // Clear localStorage before each test
//     localStorage.clear();
//   });

//   it('renders the component correctly', () => {
//     // Wrap the SignIn component with MemoryMemoryRouter
//     render(
//       <MemoryMemoryRouter>
//         <SignUp />
//       </MemoryMemoryRouter>
//     );

//     // Assert that the component renders correctly
//     const componentElement = screen.getByText('My Component Heading');
//     expect(componentElement).toBeInTheDocument();
//   });

//   it('renders form fields and submit button', () => {
//     render(
//       <MemoryMemoryRouter>
//         <SignUp />
//       </MemoryMemoryRouter>
//     );

//     // Check for username field using getByRole
//     const usernameField = screen.getByRole('textbox', { name: /Username/i });
//     expect(usernameField).toBeInTheDocument();

//     // Check for password field using getByLabelText with exact match
//     const passwordField = screen.getByLabelText('Password', { exact: true });
//     expect(passwordField).toBeInTheDocument();

//     // Check for confirm password field using getByLabelText with exact match
//     const confirmPasswordField = screen.getByLabelText('Confirm Password', { exact: true });
//     expect(confirmPasswordField).toBeInTheDocument();

//     // Check for submit button
//     const submitButton = screen.getByRole('button', { name: /Sign Up/i });
//     expect(submitButton).toBeInTheDocument();
//   });

//   it('displays validation errors on empty input', async () => {
//     render(
//       <MemoryMemoryRouter>
//         <SignUp />
//       </MemoryMemoryRouter>
//     );

//     // Simulate form submission without filling fields
//     const submitButton = screen.getByRole('button', { name: /Sign Up/i });
//     fireEvent.click(submitButton);

//     // Check for error messages using a function to match text
//     const usernameError = await screen.findByText((content, element) => {
//       return element?.textContent === 'Username is required';
//     });
//     expect(usernameError).toBeInTheDocument();

//     const passwordError = await screen.findByText((content, element) => {
//       return element?.textContent === 'Password is required';
//     });
//     expect(passwordError).toBeInTheDocument();

//     const confirmPasswordError = await screen.findByText((content, element) => {
//       return element?.textContent === 'Confirm Password is required';
//     });
//     expect(confirmPasswordError).toBeInTheDocument();
//   });
// });
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SIGNUP_FIELDS, ALERT_MESSAGES, BUTTON_TEXT } from "../../constants";
import { BrowserRouter as MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import SignUp from ".";

// Mock localStorage
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

describe("SignUp Component", () => {
  // Define navigateMock before vi.mock
  const navigateMock = vi.fn();

  beforeEach(() => {
    // Clear localStorage before each test
    mockLocalStorage.clear();
  });

  // Mock react-router-dom with importOriginal to retain original exports
  vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<typeof import("react-router-dom")>();
    return {
      ...actual,
      useNavigate: () => navigateMock,
    };
  });

  test("renders SignUp component", () => {
    render(
        <SignUp />
    );

    // Check if the signup title is present
    const headingElement = screen.getByRole("heading", {
      name: BUTTON_TEXT.SIGNUP_TITLE,
    });
    expect(headingElement).toBeInTheDocument();

    // Check if the sign-up button is present
    const signUpButton = screen.getByRole("button", {
      name: BUTTON_TEXT.SIGN_UP,
    });
    expect(signUpButton).toBeInTheDocument();
  });

  it("displays an error message when passwords do not match", async () => {
    render(

        <SignUp />
    );

    // Fill out the form with mismatched passwords
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[0].label), "testuser");
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[1].label), "password123");
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[2].label), "password456");

    // Submit the form
    await userEvent.click(screen.getByText(BUTTON_TEXT.SIGN_UP));

    // Check if the error message is displayed
    await waitFor(() => {
      expect(screen.getByText(ALERT_MESSAGES.PASSWORD_MISMATCH)).toBeInTheDocument();
    });
  });

  it("displays an error message when username already exists", async () => {
    // Set an existing username in localStorage
    mockLocalStorage.setItem("username", "testuser");

    render(
        <SignUp />
    );

    // Fill out the form with the existing username
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[0].label), "testuser");
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[1].label), "password123");
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[2].label), "password123");

    // Submit the form
    await userEvent.click(screen.getByText(BUTTON_TEXT.SIGN_UP));

    // Check if the error message is displayed
    await waitFor(() => {
      expect(screen.getByText(ALERT_MESSAGES.ALREADY_SIGNED_UP)).toBeInTheDocument();
    });
  });

  it("navigates to the sign-in page after successful signup", async () => {
    render(
        <SignUp />
    );

    // Fill out the form with valid data
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[0].label), "newuser");
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[1].label), "password123");
    await userEvent.type(screen.getByLabelText(SIGNUP_FIELDS[2].label), "password123");

    // Submit the form
    await userEvent.click(screen.getByText(BUTTON_TEXT.SIGN_UP));

    // Wait for navigation
    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/signIn");
    });
  });
});