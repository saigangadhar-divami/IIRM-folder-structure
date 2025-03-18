import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Container, Typography, Box, Alert } from "@mui/material";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "../../common/TestField";
import {
  API_URL,
  FIELDS,
  ALERT_MESSAGES,
  BUTTON_TEXT,
  CONSOLE_MESSAGES,
} from "../../constants";

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (
        data.username === storedUsername &&
        data.password === storedPassword
      ) {
        console.log(CONSOLE_MESSAGES.LOGIN_SUCCESS, data);
        navigate("/home");
      } else {
        throw new Error(ALERT_MESSAGES.INVALID_CREDENTIALS);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          setErrorMessage(ALERT_MESSAGES.REQUEST_TIMEOUT);
        } else if (error.response) {
          setErrorMessage(
            error.response.data?.message || ALERT_MESSAGES.INVALID_CREDENTIALS
          );
        } else if (error.request) {
          setErrorMessage(ALERT_MESSAGES.NO_SERVER_RESPONSE);
        } else {
          setErrorMessage(ALERT_MESSAGES.GENERIC_ERROR);
        }
      } else {
        setErrorMessage(ALERT_MESSAGES.INVALID_CREDENTIALS);
      }
    }
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Box mt={5}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className={styles.typography}
        >
          {BUTTON_TEXT.TITLE}
        </Typography>
        {errorMessage && ( // Display error message in the DOM
          <Alert severity="error" className={styles.alert}>
            {errorMessage}
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {FIELDS.map((field) => (
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
                className={styles.textField}
                error={!!errors[field.name as keyof SignInFormData]}
                helperText={errors[field.name as keyof SignInFormData]?.message}
                validationRules={field.validationRules}
              />
              {errors[field.name as keyof SignInFormData]?.message && (
                <Alert severity="error" className={styles.alert}>
                  {errors[field.name as keyof SignInFormData]?.message}
                </Alert>
              )}
            </div>
          ))}
          <Box mt={2}>
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
              {isSubmitting ? BUTTON_TEXT.LOADING : BUTTON_TEXT.SUBMIT}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default SignIn;
