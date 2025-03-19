import styled from "styled-components";
import { AppBar } from "@mui/material";
import Button from "../Button";

export const HeaderContainer = styled(AppBar)`
  background-color: white !important;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row !important;
  box-shadow: 0px 4px 6px rgba(72, 55, 55, 0.1) !important;
  // position: fixed !important;
  // z-index: 1000;
  // top: 0;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`;

export const LogoutButton = styled(Button)`
  color: black !important;
  border: 1px solid black !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
  }
`;