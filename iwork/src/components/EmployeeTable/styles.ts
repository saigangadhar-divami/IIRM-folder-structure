import { Box, CircularProgress, IconButton, Tooltip, styled } from "@mui/material";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .ag-pinned-right-header {
    border-left: none !important;
  }
  .ag-pinned-right-cols-container {
    border-left: none !important;
  }
`;

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  // AG Grid container styling
  "& .ag-root-wrapper": {
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
  },
  "& .ag-header-cell": {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
  },
}));

export const GridContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 160px)", // Adjust based on your layout
  position: "relative",
}));

export const Loader = styled(CircularProgress)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
});

export const PaginationContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 10,
});

// AG Grid specific styled components
export const ActionsCell = styled("div")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(0.75, 0, 0.25, 0),
  borderRadius: theme.shape.borderRadius,
  zIndex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));

export const ActionIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "all 0.2s",
  padding: theme.spacing(0.5),
  "&:hover": {
    transform: "scale(1.2)",
    backgroundColor: "transparent",
  },
}));

export const EditIconButton = styled(ActionIconButton)({
  "&:hover": {
    color: "#000000",
  },
});

export const DeleteIconButton = styled(ActionIconButton)({
  "&:hover": {
    color: "red",
  },
});

// AG Grid header alignment
export const RightAlignedHeader = styled("div")({
  "& .ag-header-cell-label": {
    justifyContent: "flex-end",
    paddingRight: "16px",
  },
});