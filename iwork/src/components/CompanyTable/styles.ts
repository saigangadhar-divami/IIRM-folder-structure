// src/components/CompanyTable/CompanyTable.styles.ts
import styled, { createGlobalStyle, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin-top: 50px;
`;

export const SearchInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;
export const RowHoverStyle = createGlobalStyle`
  /* Hover effect for rows */
  .ag-row-hover {
    background-color: #f5f5f5; /* Optional: Add a subtle hover effect */
  }
  /* Show actions only on hover */
  .ag-row-hover .actions-cell {
    visibility: visible;
  }

  /* Hide actions by default */
  .actions-cell {
    visibility: hidden;
    display: flex;
    gap: 8px;
  }
    .ag-header-cell {
    border-right: none !important;
  }

  /* Remove border-right from grid cells */
  .ag-cell {
    border-left: none !important;
  }
  .ag-pinned-right-header{
    border-left: none;
    // display: none;
    }

`;