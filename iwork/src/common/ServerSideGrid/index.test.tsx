import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ServerSideGrid from "./index";
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

describe("ServerSideGrid Component", () => {
  it("renders correctly with required props", async () => {
    render(
      <ServerSideGrid
        rows={mockRowData}
        totalRecords={20}
        currentPage={1}
        loading={false}
        onPageChange={vi.fn()}
        onPageSizeChange={vi.fn()}
        pageSizeOptions={[5, 10, 20]}
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
      <ServerSideGrid
        rows={[]}
        totalRecords={20}
        currentPage={1}
        loading={true}
        onPageChange={vi.fn()}
        onPageSizeChange={vi.fn()}
        pageSizeOptions={[5, 10, 20]}
        columns={mockColumns}
        pageSize={10}
      />
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("hides CircularProgress when loading is false", () => {
    render(
      <ServerSideGrid
        rows={mockRowData}
        totalRecords={20}
        currentPage={1}
        loading={false}
        onPageChange={vi.fn()}
        onPageSizeChange={vi.fn()}
        pageSizeOptions={[5, 10, 20]}
        columns={mockColumns}
        pageSize={10}
      />
    );

    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
  });

  it("renders Pagination component with correct page count", () => {
    render(
      <ServerSideGrid
        rows={mockRowData}
        totalRecords={50}
        currentPage={1}
        loading={false}
        onPageChange={vi.fn()}
        onPageSizeChange={vi.fn()}
        pageSizeOptions={[5, 10, 20]}
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
      <ServerSideGrid
        rows={mockRowData}
        totalRecords={20}
        currentPage={1}
        loading={false}
        onPageChange={mockOnPageChange}
        onPageSizeChange={vi.fn()}
        pageSizeOptions={[5, 10, 20]}
        columns={mockColumns}
        pageSize={10}
      />
    );

    // Click page 2 in the pagination
    fireEvent.click(screen.getByText("2"));

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageSizeChange when a new page size is selected", async () => {
    const mockOnPageSizeChange = vi.fn();

    render(
      <ServerSideGrid
        rows={mockRowData}
        totalRecords={20}
        currentPage={1}
        loading={false}
        onPageChange={vi.fn()}
        onPageSizeChange={mockOnPageSizeChange}
        pageSizeOptions={[5, 10, 20]}
        columns={mockColumns}
        pageSize={10}
      />
    );

    // Target the combobox element
    const select = screen.getByRole("combobox");

    // Open the select dropdown
    fireEvent.mouseDown(select);

    // Select "20" as the new page size
    fireEvent.click(screen.getByText("20"));

    expect(mockOnPageSizeChange).toHaveBeenCalledWith(20);
  });
});
