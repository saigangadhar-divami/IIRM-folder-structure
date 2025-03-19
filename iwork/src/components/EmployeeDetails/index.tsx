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

const EmployeeDetails = () => {
  const location = useLocation();
  const rowData = location.state?.row;

  if (!rowData) {
    return <Typography variant="h6">No data available</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Employee Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {Object.entries(rowData).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell
                  sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                >
                  {key}
                </TableCell>
                <TableCell>{value as React.ReactNode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default EmployeeDetails;
