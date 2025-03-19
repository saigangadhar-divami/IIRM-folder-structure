import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Card, Container, DetailRow, Label, Title, Value } from "./styles";

const EmployeeDetails = () => {
  const location = useLocation();
  const rowData = location.state?.row;

  if (!rowData) {
    return <Typography variant="h6">No data available</Typography>;
  }

  return (
    <Container>
      <Card>
        <Title>Employee Details</Title>
        {Object.entries(rowData).map(([key, value]) => (
          <DetailRow key={key}>
            <Label>{key}:</Label>
            <Value>{value as React.ReactNode}</Value>
          </DetailRow>
        ))}
      </Card>
    </Container>
  );
};
export default EmployeeDetails;
