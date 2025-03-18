import React from "react";
import {
  Menu as MUIMenu,
  MenuProps as MUIMenuProps,
  MenuItem,
  ListItemIcon,
} from "@mui/material";

interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
}

interface MenuProps extends MUIMenuProps {
  menuItems: MenuItemProps[];
  onMenuItemClick: (item: string) => void;
}

const Menu: React.FC<MenuProps> = ({
  menuItems,
  onMenuItemClick,
  ...MUIMenuProps
}) => {
  return (
    <MUIMenu {...MUIMenuProps}>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} onClick={() => onMenuItemClick(menuItem.label)}>
          {menuItem.icon && <ListItemIcon>{menuItem.icon}</ListItemIcon>}
          {menuItem.label}
        </MenuItem>
      ))}
    </MUIMenu>
  );
};

export default Menu;
