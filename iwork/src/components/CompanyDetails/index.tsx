import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, Title, DetailRow, Label, Value } from "./styles";
import { Typography } from "@mui/material";

const CompanyDetails: React.FC = () => {
  const location = useLocation();
  const company = location.state?.company; // Company data from API
  if (!company) {
    return <Typography variant="h6">No data available</Typography>;
  }
  return (
    <Container>
      <Card>
        <Title>Company Details</Title>
        {Object.entries(company).map(([key, value]) => (
          <DetailRow key={key}>
            <Label>{key}:</Label>
              <Value>{value as React.ReactNode}</Value>
          </DetailRow>
        ))}
      </Card>
    </Container>
  );
};

export default CompanyDetails;
