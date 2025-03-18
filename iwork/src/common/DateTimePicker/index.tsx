import * as React from "react";
import {
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import { Dayjs } from "dayjs";
import DatePickerWrapper from "../DatePickerWrapper";

export interface DateTimePickerProps
  extends Omit<MUIDateTimePickerProps<Dayjs, never>, "format" | "localeText"> {
  type?: "primary" | "secondary";
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  type = "primary",
  label,
  ...props
}) => {
  const inputFormat = type === "secondary" ? "DD MMM YYYY HH:mm" : "MM/DD/YYYY HH:mm";

  return (
    <DatePickerWrapper picker="DateTimePicker">
      <MUIDateTimePicker
        format={inputFormat}
        localeText={type === "secondary" ? { fieldMonthPlaceholder: () => "MMM" } : undefined}
        label={label || "Select Date & Time"}
        {...props}
      />
    </DatePickerWrapper>
  );
};

export default DateTimePicker;
