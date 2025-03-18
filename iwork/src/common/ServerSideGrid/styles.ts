import { Box, CircularProgress, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
}));

export const GridBox = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 250px)",
  width: "100%",
  overflow: "hidden",
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