import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Alert } from "@mui/material";
import styles from "./index.module.scss";
import {
  SIGNUP_FIELDS,
  ALERT_MESSAGES,
  BUTTON_TEXT,
  CONSOLE_MESSAGES,
} from "../../constants";
import axios from "axios";
import TextField from "../../common/TestField";
import ToastMessage from "../../common/Toast";
import Button from "../../common/Button";

interface SignUpFormData {
  username: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>();
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    setError(null);

    if (data.password !== data.confirmPassword) {
      setError(ALERT_MESSAGES.PASSWORD_MISMATCH);
      return;
    }

    try {
      // Check if the username already exists in localStorage
      const storedUsername = localStorage.getItem("username");
      if (storedUsername === data.username) {
        setError(ALERT_MESSAGES.ALREADY_SIGNED_UP);
        return;
      }

      // Store credentials in localStorage
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);

      console.log(CONSOLE_MESSAGES.SIGNUP_SUCCESS, data);
      showToast();
      setTimeout(() => {
        navigate("/signIn");
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || ALERT_MESSAGES.SIGNUP_FAILED);
      } else {
        setError(ALERT_MESSAGES.UNKNOWN_ERROR);
      }
    }
  };

  const [open, setOpen] = useState(false);

  const showToast = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="sm" className={styles.container}>
      <Box mt={5}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className={styles.typography}
        >
          {BUTTON_TEXT.SIGNUP_TITLE}
        </Typography>

        {/* Display general error message */}
        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* Render form fields dynamically */}
          {SIGNUP_FIELDS.map((field) => (
            <div key={field.id}>
              <TextField
                id={field.id}
                label={field.label}
                name={field.name}
                control={control}
                defaultValue=""
                type={field.type}
                fullWidth
                required={field.required}
                disabled={isSubmitting}
                aria-label={field.label}
                className={styles.textField} // Apply the same style here
                error={!!errors[field.name as keyof SignUpFormData]}
                helperText={errors[field.name as keyof SignUpFormData]?.message}
                validationRules={field.validationRules}
              />
            </div>
          ))}

          {/* Submit button */}
          <Box mt={2} className={styles.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              className={`${styles.button} ${
                isSubmitting ? styles.disabled : styles.primary
              }`}
            >
              {isSubmitting ? BUTTON_TEXT.SIGNING_UP : BUTTON_TEXT.SIGN_UP}
            </Button>
          </Box>
        </form>

        {/* Sign In Button */}
        <Box mt={3} textAlign="center">
          <Typography variant="body1" gutterBottom>
            {BUTTON_TEXT.ALREADY_HAVE_ACCOUNT}
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              navigate("/signIn");
            }}
          >
            {BUTTON_TEXT.SIGN_IN}
          </Button>
        </Box>
      </Box>
      {/* <button onClick={showToast}>Show Success Toast</button> */}
      <ToastMessage
        open={open}
        onClose={handleClose}
        variant="info"
        message="Data fetched Successful!"
      />
    </Container>
  );
};

export default SignUp;