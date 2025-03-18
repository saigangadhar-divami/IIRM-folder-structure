import styled from "styled-components";
import { Paper, Typography } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const FormWrapper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing?.(3) || "24px"};
  margin: ${({ theme }) => theme.spacing?.(2) || "16px"};
  border-radius: ${({ theme }) => theme.spacing?.(1) || "8px"};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
`;

export const FormTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing?.(3) || "24px"};
  color: ${({ theme }) => theme.palette?.primary?.main || "black"};
  font-weight: bold;
  text-align: center;
`;
