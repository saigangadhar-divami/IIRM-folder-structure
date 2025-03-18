import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import SignUp from './index';
import '@testing-library/jest-dom';

describe('SignUp Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('renders the component correctly', () => {
    // Wrap the SignIn component with MemoryRouter
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    // Assert that the component renders correctly
    const componentElement = screen.getByText('My Component Heading');
    expect(componentElement).toBeInTheDocument();
  });

  it('renders form fields and submit button', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    // Check for username field using getByRole
    const usernameField = screen.getByRole('textbox', { name: /Username/i });
    expect(usernameField).toBeInTheDocument();

    // Check for password field using getByLabelText with exact match
    const passwordField = screen.getByLabelText('Password', { exact: true });
    expect(passwordField).toBeInTheDocument();

    // Check for confirm password field using getByLabelText with exact match
    const confirmPasswordField = screen.getByLabelText('Confirm Password', { exact: true });
    expect(confirmPasswordField).toBeInTheDocument();

    // Check for submit button
    const submitButton = screen.getByRole('button', { name: /Sign Up/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('displays validation errors on empty input', async () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    // Simulate form submission without filling fields
    const submitButton = screen.getByRole('button', { name: /Sign Up/i });
    fireEvent.click(submitButton);

    // Check for error messages using a function to match text
    const usernameError = await screen.findByText((content, element) => {
      return element?.textContent === 'Username is required';
    });
    expect(usernameError).toBeInTheDocument();

    const passwordError = await screen.findByText((content, element) => {
      return element?.textContent === 'Password is required';
    });
    expect(passwordError).toBeInTheDocument();

    const confirmPasswordError = await screen.findByText((content, element) => {
      return element?.textContent === 'Confirm Password is required';
    });
    expect(confirmPasswordError).toBeInTheDocument();
  });
});