import styled from "styled-components";
import { AppBar } from "@mui/material";
import Button from "../Button";

export const HeaderContainer = styled(AppBar)`
  background-color: rgb(91, 169, 247) !important;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row !important;
  box-shadow: 0px 4px 6px rgba(161, 40, 40, 0.1) !important;
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



// import styled from "styled-components";
// import { AppBar } from "@mui/material";
// import Button from "../Button";

// export const HeaderContainer = styled(AppBar)`
//   background-color: ${({ theme }) => theme.palette.primary.main} !important;
//   padding: 5px 10px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row !important;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1) !important;
// `;

// export const LogoImage = styled.img`
//   width: 80px;
//   height: 40px;
//   object-fit: contain;
//   cursor: pointer;
// `;

// export const LogoutButton = styled(Button)`
//   color: ${({ theme }) => theme.palette.secondary.main} !important;
//   border: 1px solid ${({ theme }) => theme.palette.secondary.main} !important;
//   &:hover {
//     background-color: ${({ theme }) => theme.palette.secondary.light} !important;
//   }
// `;
