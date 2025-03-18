import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// Declare module augmentation for custom colors/variants
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    success: Palette['primary'];
    warning: Palette['primary'];
    info: Palette['primary'];
    custom: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    custom?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }

  // Custom breakpoints if needed
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true; // Custom breakpoint
    mobile: true; // Custom breakpoint
    tablet: true; // Custom breakpoint
    laptop: true; // Custom breakpoint
    desktop: true; // Custom breakpoint
  }

  // Declare module augmentation for custom typography variants
  interface TypographyVariants {
    poster: React.CSSProperties;
    h7: React.CSSProperties;
    subtitle3: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // Declare module augmentation for custom typography variants
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    h7?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
}

// Extend Typography variants
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h7: true;
    subtitle3: true;
    caption2: true;
  }
}

// Custom typography variants
const typography: TypographyOptions = {
  fontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  h1: {
    fontSize: '10px',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontSize: '10px',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h6: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  subtitle1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.57,
  },
  body1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.57,
  },
  // ... add more custom variants
};

// Custom shadows
const shadows = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  // ... add more custom shadows
];

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#ffffff',
    },
    neutral: {
      main: '#64748B',
      light: '#94A3B8',
      dark: '#334155',
      contrastText: '#ffffff',
    },
    custom: {
      main: '#5048E5',
      light: '#828DF8',
      dark: '#3832A0',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1A2027',
      secondary: '#3E5060',
      disabled: '#A1A4A7',
    },
  },
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  shadows: shadows as any,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          padding: '16px',
        },
        head: {
          fontWeight: 600,
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '12px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
        },
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
});

// const theme = createTheme(themeOptions);

// Add the custom variants to the theme
theme.typography = {
  ...theme.typography,
  poster: {
    fontSize: '10px',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  h7: {
    fontSize: '10px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  subtitle3: {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  caption2: {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: 1.66,
  },
  // Add more custom variants
};

export default theme;
