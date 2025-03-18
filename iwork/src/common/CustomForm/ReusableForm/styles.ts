import { styled } from "@mui/material/styles";
import { Button, FormControl } from "@mui/material";

export const FormWrapper = styled("form")({
  width: "100%",
  maxWidth: "800px",
  margin: "auto",
});

export const StyledButton = styled(Button)({
  marginTop: "16px",
  display: "block",
  margin: "16px auto 0", // top, horizontal, bottom margins
  minWidth: "120px",
});
export const RequiredFormControl = styled(FormControl)({
  "& .MuiInputLabel-root": {
    "&.Mui-required": {
      "& .MuiInputLabel-asterisk": {
        color: "#d32f2f",
      },
    },
  },
});
