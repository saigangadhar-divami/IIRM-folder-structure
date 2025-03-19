import React from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { Box, FormControl, MenuItem, Pagination, Select } from "@mui/material";
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
  pageSizeOptions: number[];
  onPageSizeChange: (pageSize: number) => void;
}

const ServerSideGrid: React.FC<ServerSideGridProps> = ({
  rows,
  totalRecords,
  currentPage,
  loading,
  onPageChange,
  columns,
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
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
          <FormControl
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            variant="outlined"
            size="small"
          >
            <Box sx={{ marginRight: 1 }}>Page Size: </Box>
            <Select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              MenuProps={{
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
              }}
            >
              {pageSizeOptions.map((size: number) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
