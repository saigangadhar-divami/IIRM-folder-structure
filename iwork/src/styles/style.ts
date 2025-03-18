import { Box, Button, styled } from "@mui/material";

// example of a styled component to be used with the MUI theme
export const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  
  [theme.breakpoints.up('tablet')]: {
    // Styles for tablet and above
    padding: theme.spacing(2),
  },
  
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[4]
  },
  
  '&.MuiButton-containedPrimary': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    fontSize: theme.typography.h7.fontSize,
    fontWeight: theme.typography.h7.fontWeight,
    lineHeight: theme.typography.h7.lineHeight,
  }
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));