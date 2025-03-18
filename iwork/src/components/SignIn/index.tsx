import React from "react";
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
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");
      // const API_URL =  API_URL;
      // const response = await axios.post(API_URL, data, {
      //   headers: { "Content-Type": "application/json" },
      //   timeout: 5000, // 5 seconds timeout
      // });

      // // Check if response contains a token (modify as per your API response)
      // if (response.data?.token) {
      //   localStorage.setItem("authToken", response.data.token);
      // }

      // console.log("Login successful", response.data);
      // navigate("/home");
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
          alert(ALERT_MESSAGES.REQUEST_TIMEOUT);
        } else if (error.response) {
          alert(
            error.response.data?.message || ALERT_MESSAGES.INVALID_CREDENTIALS
          );
        } else if (error.request) {
          alert(ALERT_MESSAGES.NO_SERVER_RESPONSE);
        } else {
          alert(ALERT_MESSAGES.GENERIC_ERROR);
        }
      } else {
        alert(ALERT_MESSAGES.UNKNOWN_ERROR);
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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {FIELDS.map((field: FormField) => (
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
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
                validationRules={field.validationRules}
              />
              {errors[field.name]?.message && (
                <Alert severity="error" className={styles.alert}>
                  {errors[field.name]?.message}
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
