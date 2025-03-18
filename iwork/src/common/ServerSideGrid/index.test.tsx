import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AgGridWithMuiPagination from "./index";
import "@testing-library/jest-dom";
import { ColDef } from "ag-grid-community";
import { vi } from "vitest";

const mockColumns: ColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 150 },
];

const mockRowData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

describe("AgGridWithMuiPagination Component", () => {
  it("renders correctly with required props", async () => {
    render(
      <AgGridWithMuiPagination
        rows={mockRowData}
        totalRecords={20}
        currentPage={1}
        loading={false}
        onPageChange={vi.fn()}
        columns={mockColumns}
        pageSize={10}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    });
  });

  it("displays CircularProgress when loading is true", () => {
    render(
      <AgGridWithMuiPagination
        rows={[]}
        totalRecords={20}
        currentPage={1}
        loading={true}
        onPageChange={vi.fn()}
        columns={mockColumns}
        pageSize={10}
      />
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("hides CircularProgress when loading is false", () => {
    render(
      <AgGridWithMuiPagination
        rows={mockRowData}
        totalRecords={20}
        currentPage={1}
        loading={false}
        onPageChange={vi.fn()}
        columns={mockColumns}
        pageSize={10}
      />
    );

    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
  });

  it("renders Pagination component with correct page count", () => {
    render(
      <AgGridWithMuiPagination
        rows={mockRowData}
        totalRecords={50}
        currentPage={1}
        loading={false}
        onPageChange={vi.fn()}
        columns={mockColumns}
        pageSize={10}
      />
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument(); // 50 / 10 = 5 pages
  });

  it("calls onPageChange when pagination is clicked", async () => {
    const mockOnPageChange = vi.fn();

    render(
      <AgGridWithMuiPagination
        rows={mockRowData}
        totalRecords={20}
        currentPage={1}
        loading={false}
        onPageChange={mockOnPageChange}
        columns={mockColumns}
        pageSize={10}
      />
    );

    // Click page 2 in the pagination
    fireEvent.click(screen.getByText("2"));

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });
});
