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
  width?: string | number;
}

const CommonAGGrid: React.FC<AGGridProps> = ({
  rowData,
  columnDefs,
  pagination = true,
  paginationPageSize,
  paginationPageSizeSelector,
  height,
  width = "100%",
  ...rest
}) => {
  return (
    <div
      data-testid="ag-grid-container"
      className="ag-theme-alpine"
      style={{ height, width }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        {...rest}
      />
    </div>
  );
};

export default CommonAGGrid;
