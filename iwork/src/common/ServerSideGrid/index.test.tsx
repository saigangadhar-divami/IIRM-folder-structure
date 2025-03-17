import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import ServerSideGrid from "./index";
import "@testing-library/jest-dom";

describe("CustomDataGrid Component", () => {
  const rows = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];

  const columns = [{ field: "name", headerName: "Name", width: 150 }];
  const rowCount = 10;
  const paginationSettings = { page: 0, pageSize: 5 };
  const onPaginationChange = vi.fn();

  it("renders correctly with required props", () => {
    render(
      <ServerSideGrid
        rows={rows}
        columns={columns}
        rowCount={rowCount}
        paginationSettings={paginationSettings}
        onPaginationChange={onPaginationChange}
        loading={false}
      />
    );

    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("calls onPaginationChange when pagination changes", async () => {
    render(
      <ServerSideGrid
        rows={rows}
        columns={columns}
        rowCount={rowCount}
        paginationSettings={paginationSettings}
        onPaginationChange={onPaginationChange}
        loading={false}
      />
    );

    const nextPageButton = screen.getByLabelText("Go to next page");
    await userEvent.click(nextPageButton);

    expect(onPaginationChange).toHaveBeenCalled();
  });

  it("renders checkbox selection when enabled", () => {
    render(
      <ServerSideGrid
        rows={rows}
        columns={columns}
        rowCount={rowCount}
        paginationSettings={paginationSettings}
        onPaginationChange={onPaginationChange}
        checkboxSelection
        loading={false}
      />
    );

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBeGreaterThan(0);
  });
});
