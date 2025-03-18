import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { HeaderContainer, LogoImage, LogoutButton } from "./styles";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signIn");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <HeaderContainer position="static">
      <LogoImage 
        src="https://www.iirmholdings.in/content_images/logo.png" 
        alt="IIRMLOGO" 
        onClick={handleLogoClick}
      />
      <LogoutButton variant="outlined" startIcon={<LogoutIcon />} onClick={handleLogout}>
        Logout
      </LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
