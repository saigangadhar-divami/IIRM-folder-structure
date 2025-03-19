import { CircularProgress } from "@mui/material";
import styled from "styled-components";

export const Loader = styled(CircularProgress)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  });