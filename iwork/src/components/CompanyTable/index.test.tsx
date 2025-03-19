// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import CompanyTable from "./index";
// import { vi } from "vitest";

// // Mock API call
// vi.mock("../../api/companyApi", () => ({
//   fetchCompanyData: jest.fn(() =>
//     Promise.resolve([
//       { id: 1, name: "Company A", location: "New York" },
//       { id: 2, name: "Company B", location: "San Francisco" },
//     ])
//   ),
// }));

// describe("CompanyTable Component", () => {
//   it("renders the CompanyTable component", () => {
//     render(<CompanyTable />);
//     expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
//   });

//   it(
//     "loads and displays data after API call",
//     async () => {
//       render(<CompanyTable />);
//       await waitFor(() => {
//         expect(screen.getByText("Test Company")).toBeInTheDocument();
//         expect(screen.getByText("Test Company 2")).toBeInTheDocument();
//       });
//     },
//     10000 // Timeout increased to 10 seconds
//   );

//   it(
//     "filters grid data when searching",
//     async () => {
//       render(<CompanyTable />);
//       await waitFor(() => expect(screen.getByText("Test Company")).toBeInTheDocument());

//       const searchInput = screen.getByPlaceholderText("Search...") as HTMLInputElement;
//       fireEvent.change(searchInput, { target: { value: "Test Company" } });

//       await waitFor(() => {
//         expect(screen.getByText("Test Company")).toBeInTheDocument();
//         expect(screen.queryByText("Company B")).not.toBeInTheDocument();
//       });
//     },
//     10000 // Timeout increased to 10 seconds
//   );
// });




import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CompanyTable from "./index";
import { vi } from "vitest";

vi.mock("../../common/ClientSideGrid", () => ({
  default: vi.fn(() => <div data-testid="mock-grid">Mocked Grid</div>),
}));

describe("CompanyTable Component", () => {
  const mockData = [
    {
      companyId: 1,
      companyName: "Test Company",
      displayName: "Test Co",
      website: "https://www.testcompany.com",
      dateOfIncorporation: "2023-01-01",
      panCardNumber: "ABCDE1234F",
      registrationNo: "REG123456789",
      paidUpCapital: 5000000,
      tanNumber: "TAN1234567",
    },
  ];

//   beforeEach(() => {
//     global.fetch = vi.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(mockData),
//       })
//     ) as jest.Mock;
//   });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the component without crashing", async () => {
    render(<CompanyTable />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByTestId("mock-grid")).toBeInTheDocument();

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://mocki.io/v1/83361b52-5aae-43af-8b70-bc8b7badbab1"
      );
    });
  });

  it("displays data fetched from the API", async () => {
    render(<CompanyTable />);

    await waitFor(() => {
      expect(screen.getByText("Test Company")).toBeInTheDocument();
    });
  });

  it("filters data based on search input", async () => {
    render(<CompanyTable />);

    await waitFor(() => {
      expect(screen.getByText("Test Company")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Nonexistent" } });

    await waitFor(() => {
      expect(screen.queryByText("Test Company")).not.toBeInTheDocument();
    });
  });
});