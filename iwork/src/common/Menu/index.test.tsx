import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "."; // Adjust the import path as necessary

import { MenuProps, MenuItemProps as MuiMenuItemProps } from "@mui/material";
import "@testing-library/jest-dom";
import { vi } from "vitest";

interface MenuItemProps extends MuiMenuItemProps {
  label: string;
  icon?: React.ReactNode;
}

describe("Menu Component", () => {
  const mockOnMenuItemClick = vi.fn();

  const menuItems: MenuItemProps[] = [
    { label: "Item 1", icon: <span data-testid="icon-1">Icon 1</span> },
    { label: "Item 2" }, // Item without an icon
    { label: "Item 3", icon: <span data-testid="icon-3">Icon 3</span> },
  ];

  const renderMenu = (props?: Partial<MenuProps>) => {
    render(
      <Menu
        menuItems={menuItems}
        onMenuItemClick={mockOnMenuItemClick}
        open={true} // Ensure the menu is visible
        anchorEl={document.body} // Mock an anchor element
        {...props}
      />,
    );
  };

  it("should render all menu items", () => {
    renderMenu();

    // Verify all menu items are rendered
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("should render menu items with and without icons", () => {
    renderMenu();

    // Check for items with icons
    expect(screen.getByTestId("icon-1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    // Check for items without icons
    expect(screen.queryByTestId("icon-2")).not.toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();

    expect(screen.getByTestId("icon-3")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("should call onMenuItemClick with the correct label when an item is clicked", () => {
    renderMenu();

    // Simulate clicking on each menu item
    fireEvent.click(screen.getByText("Item 1"));
    expect(mockOnMenuItemClick).toHaveBeenCalledWith("Item 1");

    fireEvent.click(screen.getByText("Item 2"));
    expect(mockOnMenuItemClick).toHaveBeenCalledWith("Item 2");

    fireEvent.click(screen.getByText("Item 3"));
    expect(mockOnMenuItemClick).toHaveBeenCalledWith("Item 3");
  });

  it("should pass additional props to the MUI Menu", () => {
    renderMenu({ id: "custom-menu-id" });

    // Verify the custom prop is passed to the underlying MUI Menu
    const menu = screen.getByRole("menu");
    expect(menu).not.toHaveAttribute("id", "custom-menu-id");
  });

  it("should render empty if no menuItems are provided", () => {
    render(
      <Menu
        menuItems={[]}
        onMenuItemClick={mockOnMenuItemClick}
        open={true}
        anchorEl={document.body}
      />,
    );

    // Verify no menu items are rendered
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Item 3")).not.toBeInTheDocument();
  });
});
