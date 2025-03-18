import { render, screen } from "@testing-library/react";
import ToastMessage from "./index";
import "@testing-library/jest-dom";

describe("ToastMessage", () => {
  it("should render the Snackbar when open is true", () => {
    render(
      <ToastMessage
        open={true}
        vertical="top"
        horizontal="center"
        message="Test Message"
      />,
    );

    const snackbar = screen.getByTestId("snackbar");
    expect(snackbar).toBeInTheDocument();
    expect(snackbar).toHaveTextContent("Test Message");
  });

  it("should not render the Snackbar when open is false", () => {
    render(
      <ToastMessage
        open={false}
        vertical="top"
        horizontal="center"
        message="Test Message"
      />,
    );

    const snackbar = screen.queryByTestId("snackbar");
    expect(snackbar).not.toBeInTheDocument();
  });

  it("should open and display message when open is toggled to true", () => {
    const { rerender } = render(
      <ToastMessage
        open={false}
        vertical="top"
        horizontal="center"
        message="Test Message"
      />,
    );

    let snackbar = screen.queryByTestId("snackbar");
    expect(snackbar).not.toBeInTheDocument();

    rerender(
      <ToastMessage
        open={true}
        vertical="top"
        horizontal="center"
        message="Test Message"
      />,
    );

    snackbar = screen.getByTestId("snackbar");
    expect(snackbar).toBeInTheDocument();
    expect(snackbar).toHaveTextContent("Test Message");
  });

  it("should apply correct anchorOrigin based on vertical and horizontal props when open is true", () => {
    render(
      <ToastMessage
        open={true}
        vertical="bottom"
        horizontal="right"
        message="Test Message"
      />,
    );

    const snackbar = screen.getByTestId("snackbar");

    const anchorOrigin = snackbar.closest('[role="presentation"]'); // MUI Snackbar's root div
    expect(anchorOrigin).toHaveClass("MuiSnackbar-anchorOriginBottomRight");
    expect(anchorOrigin).toHaveClass("MuiSnackbar-anchorOriginBottomRight");
  });

  it("should render correctly with default props and open is true", () => {
    render(
      <ToastMessage
        open={true}
        vertical="top"
        horizontal="right"
        message="Default Props Message"
      />,
    );

    const snackbar = screen.getByTestId("snackbar");
    expect(snackbar).toHaveTextContent("Default Props Message");
    const anchorOrigin = snackbar.closest('[role="presentation"]');
    expect(anchorOrigin).toHaveClass("MuiSnackbar-anchorOriginTopRight");
    expect(anchorOrigin).toHaveClass("MuiSnackbar-anchorOriginTopRight");
  });
});
