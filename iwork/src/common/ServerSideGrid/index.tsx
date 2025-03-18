import React from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { Pagination } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import { GridBox, Loader, PaginationContainer, Wrapper } from "./styles";

interface ServerSideGridProps extends AgGridReactProps {
  totalRecords: number;
  currentPage: number;
  loading: boolean;
  onPageChange: (page: number) => void;
  pageSize: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[];
  columns: ColDef[];
  height?: number;
}

const ServerSideGrid: React.FC<ServerSideGridProps> = ({
  rows,
  totalRecords,
  currentPage,
  loading,
  onPageChange,
  columns,
  pageSize,
  height = 400,
  ...rest
}) => {
  return (
    <div className="ag-theme-alpine" style={{ height, width: "100%" }}>
      <Wrapper>
        <GridBox className="ag-theme-alpine">
          {loading && <Loader />}
          <AgGridReact
            columnDefs={columns}
            rowData={rows}
            rowHeight={50}
            headerHeight={50}
            suppressScrollOnNewData
            domLayout="normal"
            rowModelType="clientSide"
            {...rest}
          />
        </GridBox>
        <PaginationContainer>
          <Pagination
            count={Math.ceil(totalRecords / pageSize)}
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
            color="primary"
          />
        </PaginationContainer>
      </Wrapper>
    </div>
  );
};

export default ServerSideGrid;
