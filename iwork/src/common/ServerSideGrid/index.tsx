import React from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { Box, Pagination } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import { GridContainer, Loader, PaginationContainer, Wrapper } from "./styles";

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
  height = 570,
  ...rest
}) => {
  return (
    <GridContainer className="ag-theme-alpine" style={{ width: "100%" }}>
      <Wrapper>
        <Box className="ag-theme-alpine" style={{ height }}>
          {loading && <Loader />}
          <AgGridReact
            columnDefs={columns}
            rowData={rows}
            rowHeight={50}
            headerHeight={50}
            domLayout="normal"
            rowModelType="clientSide"
            {...rest}
          />
        </Box>
        <PaginationContainer>
          <Pagination
            count={Math.ceil(totalRecords / pageSize)}
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
            color="primary"
          />
        </PaginationContainer>
      </Wrapper>
    </GridContainer>
  );
};

export default ServerSideGrid;
