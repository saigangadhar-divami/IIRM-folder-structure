import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef, GridOptions } from "ag-grid-community";

interface AGGridProps extends Partial<GridOptions> {
  rowData: any[];
  columnDefs: ColDef[];
  pagination?: boolean;
  paginationPageSize: number;
  paginationPageSizeSelector: number[];
  height: number;
  onPaginationChange: ({
    currentPage,
    pageSize,
  }: {
    currentPage: number;
    pageSize: number;
  }) => void;
  width?: string | number;
  loading: boolean;
}

const ServerSideGrid: React.FC<AGGridProps> = ({
  rowData,
  columnDefs,
  pagination = true,
  paginationPageSize,
  paginationPageSizeSelector,
  height,
  width = "100%",
  onPaginationChange,
  loading,
  ...rest
}) => {
  const gridRef = useRef<AgGridReact>(null);

  /**
   * Handles the pagination change event.
   * This function is called whenever the pagination state changes.
   * It retrieves the current page number and page size from the grid API,
   * logs them to the console, and calls the onPaginationChange callback
   * with the current page and page size.
   */
  const onPaginationChanged = () => {
    if (gridRef.current?.api) {
      const currentPage = gridRef.current.api.paginationGetCurrentPage() + 1;
      // const totalPages = gridRef.current.api.paginationGetTotalPages();
      const pageSize = gridRef.current.api.paginationGetPageSize();
      //   console.log(`Current Page: ${currentPage}, pagesize: ${pageSize}`);
      onPaginationChange({ currentPage, pageSize });
    }
  };

  return (
    <div
      data-testid="ag-grid-container"
      className="ag-theme-alpine"
      style={{ height: 400, width }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        onPaginationChanged={onPaginationChanged}
        {...rest}
      />
    </div>
  );
};

export default ServerSideGrid;
