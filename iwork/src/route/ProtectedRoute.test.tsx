import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { AuthContext } from "../context";

// Mock components for testing routes
const MockComponent = () => <div>Protected Content</div>;
const Unauthorized = () => <div>Unauthorized Page</div>;
const Home = () => <div>Home Page</div>;

describe("ProtectedRoute Component", () => {
  test("Redirects to '/' if user is not authenticated", () => {
    const { getByText } = render(
      <AuthContext.Provider value={{ user: null, login: jest.fn(), logout: jest.fn() }}>
        <MemoryRouter initialEntries={["/protected"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/protected" element={<ProtectedRoute><MockComponent /></ProtectedRoute>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(getByText("Home Page")).toBeTruthy(); // Redirected to Home
  });

  test("Redirects to '/unauthorized' if user role is not allowed", () => {
    const { getByText } = render(
      <AuthContext.Provider value={{ user: { role: "guest", id: 1, name: "Test User", email: "test@example.com", permissions: [], subRoles: [] }, login: jest.fn(), logout: jest.fn() }}>
        <MemoryRouter initialEntries={["/protected"]}>
          <Routes>
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/protected" element={<ProtectedRoute><MockComponent /></ProtectedRoute>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(getByText("Unauthorized Page")).toBeTruthy(); // Redirected to Unauthorized
  });

  test("Renders child component when user has an allowed role", () => {
    const { getByText } = render(
      <AuthContext.Provider value={{ user: { role: "admin", id: 1, name: "Test User", email: "test@example.com", permissions: [], subRoles: [] }, login: jest.fn(), logout: jest.fn() }}>
        <MemoryRouter initialEntries={["/protected"]}>
          <Routes>
            <Route path="/protected" element={<ProtectedRoute><MockComponent /></ProtectedRoute>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(getByText("Protected Content")).toBeTruthy(); // User can access
  });
});
