import React from "react";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { DataGridProps } from "@mui/x-data-grid";

interface ServerSideGridProps extends DataGridProps {
  rows: any[];
  columns: GridColDef[];
  rowCount: number;
  paginationSettings: {
    page: number;
    pageSize: number;
  };
  onPaginationChange: (model: GridPaginationModel) => void;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  loading: boolean;
}

const ServerSideGrid: React.FC<ServerSideGridProps> = ({
  rows,
  columns,
  rowCount,
  paginationSettings,
  onPaginationChange,
  pageSizeOptions = [5, 10, 20],
  checkboxSelection = false,
  loading,
  ...rest
}) => {
  const handlePaginationModelChange = (model: GridPaginationModel) => {
    onPaginationChange(model);
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pagination
      pageSizeOptions={pageSizeOptions}
      paginationMode="server"
      rowCount={rowCount}
      paginationModel={{
        page: paginationSettings.page,
        pageSize: paginationSettings.pageSize,
      }}
      loading={loading}
      onPaginationModelChange={handlePaginationModelChange}
      checkboxSelection={checkboxSelection}
      {...rest}
    />
  );
};

export default ServerSideGrid;
