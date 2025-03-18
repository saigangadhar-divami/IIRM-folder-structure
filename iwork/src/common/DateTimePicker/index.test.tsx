import { render, screen, fireEvent } from "@testing-library/react";
import DateTimePicker, { DateTimePickerProps } from "./index";
import "@testing-library/jest-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Helper function to render the component
const renderDateTimePicker = (props: DateTimePickerProps) => {
  return render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker {...props} />
    </LocalizationProvider>,
  );
};

describe("DateTimePicker Component", () => {
  it("should render DateTimePicker with default props (primary type)", () => {
    renderDateTimePicker({});
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should render DateTimePicker with the correct input format for primary type", () => {
    renderDateTimePicker({ type: "primary" });
    const input = screen.getByRole("textbox");
    // Check if the input format is MM/DD/YYYY HH:mm
    expect(input).toHaveAttribute("placeholder", "MM/DD/YYYY hh:mm");
  });

  it("should render DateTimePicker with the correct input format for secondary type", () => {
    renderDateTimePicker({ type: "secondary" });
    const input = screen.getByRole("textbox");
    // Check if the input format is DD MMM YYYY HH:mm
    expect(input).toHaveAttribute("placeholder", "DD MMM YYYY hh:mm");
  });

  it("should render DateTimePicker with modified localeText for secondary type", () => {
    renderDateTimePicker({ type: "secondary" });

    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute(
      "placeholder",
      expect.stringContaining("MMM"),
    );
  });

  it("should display the calendar popup when clicked", async () => {
    renderDateTimePicker({});

    // Get the input element and click it to open the calendar
    const input = screen.getByRole("textbox");
    fireEvent.click(input);

    // Check if the calendar button or popup appears (adjust based on actual DOM)
    const calendarButton = await screen.findByRole("button", {
      name: /choose date/i,
    });
    expect(calendarButton).toBeInTheDocument();
  });

  it("should display the calendar popup when the input is focused", async () => {
    renderDateTimePicker({});

    // Get the input element and focus it to open the calendar
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);

    // Check if the calendar button or popup appears (adjust based on actual DOM)
    const calendarButton = await screen.findByRole("button", {
      name: /choose date/i,
    });
    expect(calendarButton).toBeInTheDocument();
  });
});
