import styled from "styled-components";
import { Container, Typography } from "@mui/material";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  max-width:70%;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  margin-bottom: 32px;
  font-size: 40px;
  font-weight: bold;
  color: #333;
`;

export const StyledForm = styled.form`
  background: #fff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextFieldWrapper = styled.div`
  margin-bottom: 24px;

  input {
    font-size: 16px;
    padding: 12.8px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease;
    width: 450px;

    &:focus {
      border-color: #1976d2;
      outline: none;
    }
  }
`;

export const AlertWrapper = styled.div`
  margin-bottom: 24px;
  border-radius: 4px;
  
  &.error {
    background-color: #ffebee;
    color: #c62828;
    border: 1px solid #ef5350;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  padding: 12.8px;
  border-radius: 4px;
  cursor: pointer;

  &.disabled {
    background-color: #e0e0e0 !important;
    color: #9e9e9e !important;
    cursor: not-allowed;
  }

  &.primary {
    background-color: #1976d2;
    color: #fff;
    border: none;

    &:hover {
      background-color: #115293;
    }
  }
`;
