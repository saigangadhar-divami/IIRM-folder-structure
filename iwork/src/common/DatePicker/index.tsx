import * as React from "react";
import {
  DatePicker as MUIDatePicker,
  DatePickerProps as MUIDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import DatePickerWrapper from "../DatePickerWrapper";

export interface DatePickerProps
  extends Omit<MUIDatePickerProps<Dayjs, never>, "format" | "localeText"> {
  type?: "primary" | "secondary";
}

const DatePicker: React.FC<DatePickerProps> = ({ type = "primary", ...props }) => {
  const inputFormat = type === "secondary" ? "DD MMM YYYY" : "MM/DD/YYYY";

  return (
    <DatePickerWrapper picker="DatePicker">
      <MUIDatePicker
        format={inputFormat}
        localeText={type === "secondary" ? { fieldMonthPlaceholder: () => "MMM" } : undefined}
        {...props}
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
