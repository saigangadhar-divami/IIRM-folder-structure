import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from './index';
import '@testing-library/jest-dom';

describe('SignIn Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('renders the component correctly', () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Check if the title is rendered
    const titleElement = screen.getByRole('heading', { name: /Sign In/i });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders form fields and submit button', () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Check for username field
    const usernameField = screen.getByLabelText(/Username/i);
    expect(usernameField).toBeInTheDocument();

    // Check for password field
    const passwordField = screen.getByLabelText(/Password/i);
    expect(passwordField).toBeInTheDocument();

    // Check for submit button
    const submitButton = screen.getByRole('button', { name: /Sign In/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('displays validation errors on empty input', async () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Simulate form submission without filling fields
    const submitButton = screen.getByRole('button', { name: /Sign In/i });
    fireEvent.click(submitButton);

    // Check for error messages
    const usernameError = await screen.findByText(/Username is required/i);
    expect(usernameError).toBeInTheDocument();

    const passwordError = await screen.findByText(/Password is required/i);
    expect(passwordError).toBeInTheDocument();
  });

  it('handles successful login', async () => {
    // Mock localStorage
    localStorage.setItem('username', 'testuser');
    localStorage.setItem('password', 'testpass');

    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'testpass' } });

    // Simulate form submission
    const submitButton = screen.getByRole('button', { name: /Sign In/i });
    fireEvent.click(submitButton);

    // Check for successful login message
    await waitFor(() => {
      expect(screen.queryByText(/Login successful/i)).toBeInTheDocument();
    });
  });

  it('displays error message for invalid credentials', async () => {
    localStorage.setItem('username', 'testuser');
    localStorage.setItem('password', 'testpass');

    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'wrongpass' } });

    const submitButton = screen.getByRole('button', { name: /Sign In/i });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText(/Invalid credentials/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('handles network errors gracefully', async () => {
    const alertMock = vi.spyOn(globalThis, 'alert').mockImplementation(() => {});

    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'testpass' } });

    // Simulate network error
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockImplementation(() => Promise.reject(new Error('Network Error')));

    const submitButton = screen.getByRole('button', { name: /Sign In/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Something went wrong. Please try again.');
    });

    alertMock.mockRestore();
    fetchMock.mockRestore();
  });
});