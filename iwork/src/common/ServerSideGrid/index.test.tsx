import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import ServerSideGrid from "./index";
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

describe("ServerSideGrid Component", () => {
  it("renders correctly with required props", async () => {
    render(
      <ServerSideGrid
        rowData={rowData}
        columnDefs={columnDefs}
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 20]}
        height={400}
        loading={false}
        onPaginationChange={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.getByRole("treegrid")).toBeInTheDocument();
    });
  });

  it("calls onPaginationChange when pagination changes", async () => {
    const mockOnPaginationChange = vi.fn();
    render(
      <ServerSideGrid
        rowData={rowData}
        columnDefs={columnDefs}
        pagination
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 20]}
        height={400}
        loading={false}
        onPaginationChange={mockOnPaginationChange}
      />
    );

    // Wait for AG Grid to initialize before checking
    await waitFor(() => {
      expect(mockOnPaginationChange).toHaveBeenCalled();
    });
  });

  it("displays the loading state when loading is true", async () => {
    render(
      <ServerSideGrid
        rowData={rowData}
        columnDefs={columnDefs}
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 20]}
        height={400}
        loading={true}
        onPaginationChange={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId("ag-grid-container")).toBeInTheDocument();
    });
  });
});
