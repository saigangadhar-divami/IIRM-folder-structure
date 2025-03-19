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
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FieldType } from "./formFieldTypes";
import { FormWrapper, StyledButton } from "./styles";
import {
  requiredField,
  emailValidation,
  passwordValidation,
  numberValidation,
  alphabetValidation,
} from "../utils/formUtils"; // Import validation rules

interface ReusableFormProps {
  fields: FieldType[];
  onSubmit: (data: Record<string, any>) => void;
  columns?: number;
  defaultValues?: Record<string, any>;
  isEditMode?: boolean;
  initialData?: Record<string, any>;
  submitButtonText?: string;
}

const ReusableForm: React.FC<ReusableFormProps> = ({
  fields,
  onSubmit,
  columns = 1,
  defaultValues,
  isEditMode = false,
  initialData = {},
  submitButtonText = isEditMode ? "Update" : "Submit",
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEditMode ? initialData : defaultValues,
  });

  const [showPassword, setShowPassword] = React.useState<
    Record<string, boolean>
  >({});

  const handleTogglePassword = (fieldName: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  React.useEffect(() => {
    if (isEditMode && initialData) {
      reset(initialData);
    }
  }, [isEditMode, initialData, reset]);

  return (
    <FormWrapper onSubmit={handleSubmit((data) => onSubmit(data))} noValidate>
      <Grid container spacing={2}>
        {fields.map((field) => {
          let validation = requiredField(`${field.label} is required`);
          if (field.type === "email")
            validation = { ...validation, ...emailValidation };
          if (field.type === "password")
            validation = { ...validation, ...passwordValidation };
          if (field.type === "number")
            validation = { ...validation, ...numberValidation };
          if (field.type === "text")
            validation = { ...validation, ...alphabetValidation };

          return (
            <Grid item xs={12} sm={12 / columns} key={field.name}>
              {field.type === "text" ||
              field.type === "number" ||
              field.type === "email" ||
              field.type === "password" ||
              field.type === "date" ||
              field.type === "textarea" ? (
                <TextField
                  {...register(field.name, validation)}
                  label={field.label}
                  type={
                    field.type === "password"
                      ? showPassword[field.name]
                        ? "text"
                        : "password"
                      : field.type === "textarea"
                      ? "text"
                      : field.type
                  }
                  InputProps={
                    field.type === "password"
                      ? {
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleTogglePassword(field.name)}
                                edge="end"
                              >
                                {showPassword[field.name] ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }
                      : undefined
                  }
                  multiline={field.type === "textarea"}
                  rows={field.type === "textarea" ? 4 : undefined}
                  disabled={field.disabled}
                  hidden={field.hidden}
                  fullWidth
                  error={!!errors[field.name]}
                  InputLabelProps={
                    field.type === "date" || field.type === "textarea"
                      ? { shrink: true }
                      : undefined
                  }
                  helperText={errors[field.name]?.message?.toString() || ""}
                />
              ) : field.type === "select" ? (
                <FormControl fullWidth>
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    {...register(field.name, validation)}
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
                  control={<Checkbox {...register(field.name, validation)} />}
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
                          <Radio {...register(field.name, validation)} />
                        }
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              ) : null}
            </Grid>
          );
        })}
      </Grid>

      <StyledButton type="submit" variant="contained" color="primary">
        {submitButtonText}
      </StyledButton>
    </FormWrapper>
  );
};

export default ReusableForm;
