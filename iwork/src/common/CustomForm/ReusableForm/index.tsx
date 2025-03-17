import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
  styled,
} from "@mui/material";
import {
  requiredField,
  emailValidation,
  numberValidation,
  //   minLength,
} from "../utils/formUtils"; // Use validation rules now

type FieldType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "select"
  | "checkbox"
  | "radio"
  | "date";

interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string | number }[]; // For select, radio fields
  validation?: Record<string, any>; // Custom validation rules
}

interface ReusableFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
  columns?: number; // Number of columns for layout
}

const FormWrapper = styled("form")({
  maxWidth: "800px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});

const StyledGrid = styled(Grid)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const StyledButton = styled(Button)({
  marginTop: "16px",
});

const ReusableForm: React.FC<ReusableFormProps> = ({
  fields,
  onSubmit,
  columns = 1,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledGrid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} sm={12 / columns} key={field.name}>
            {field.type === "text" ||
            field.type === "number" ||
            field.type === "email" ||
            field.type === "password" ||
            field.type === "date" ? (
              <TextField
                {...register(field.name, {
                  required: field.required
                    ? requiredField(`${field.label} is required`)
                    : undefined,
                  ...(field.type === "email" ? emailValidation : {}),
                  ...(field.type === "number" ? numberValidation : {}),
                  ...field.validation,
                })}
                label={field.label}
                type={field.type}
                fullWidth
                error={!!errors[field.name]}
                helperText={
                  errors[field.name]?.message
                    ? String(errors[field.name]?.message)
                    : ""
                }
              />
            ) : field.type === "select" ? (
              <FormControl fullWidth>
                <InputLabel>{field.label}</InputLabel>
                <Select
                  {...register(field.name, {
                    required: field.required
                      ? requiredField(`${field.label} is required`)
                      : undefined,
                  })}
                  label={field.label}
                >
                  {field.options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : field.type === "checkbox" ? (
              <FormControlLabel
                control={<Checkbox {...register(field.name)} />}
                label={field.label}
              />
            ) : field.type === "radio" ? (
              <FormControl component="fieldset">
                <RadioGroup row>
                  {field.options?.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={
                        <Radio
                          {...register(field.name, {
                            required: field.required
                              ? requiredField(`${field.label} is required`)
                              : undefined,
                          })}
                        />
                      }
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ) : null}
          </Grid>
        ))}
      </StyledGrid>

      <StyledButton type="submit" variant="contained" color="primary">
        Submit
      </StyledButton>
    </FormWrapper>
  );
};

export default ReusableForm;
