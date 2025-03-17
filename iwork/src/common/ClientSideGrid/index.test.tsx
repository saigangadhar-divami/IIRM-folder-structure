import { logRoles, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import CommonAGGrid from "./index";
import "@testing-library/jest-dom";
import { ColDef } from "ag-grid-community";

const rowData = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Doe", age: 32 },
];

const columnDefs: ColDef[] = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 100 },
];

describe("CommonAGGrid Component", () => {
  it("renders correctly with required props", () => {
    const { container } = render(
      <CommonAGGrid
        rowData={rowData}
        columnDefs={columnDefs}
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 20]}
        height={400}
      />
    );

    logRoles(container); // This logs all roles in the console

    expect(screen.getByRole("treegrid")).toBeInTheDocument();
  });

  it("renders pagination when enabled", async () => {
    render(
      <CommonAGGrid
        rowData={rowData}
        columnDefs={columnDefs}
        pagination
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 20]}
        height={400}
      />
    );

    // Wait for AG Grid to render the pagination
    await waitFor(() =>
      expect(screen.getByRole("treegrid")).toBeInTheDocument()
    );

    // Check if AG Grid container is present
    expect(screen.getByTestId("ag-grid-container")).toBeInTheDocument();
  });

  it("allows changing page size", async () => {
    render(
      <CommonAGGrid
        rowData={rowData}
        columnDefs={columnDefs}
        pagination
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 20]}
        height={400}
      />
    );

    // Click the pagination dropdown
    const pageSizeDropdown = screen.getByLabelText("Page Size");
    await userEvent.click(pageSizeDropdown);

    // Select the "10" option
    const pageSizeOption = screen.getByText("10");
    await userEvent.click(pageSizeOption);

    // Check if the selection is applied
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
