import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const elegantDarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#a6d4fa',
        },
        secondary: {
            main: '#f4a2a3',
        },
        background: {
            default: 'rgb(9, 9, 9)',
            paper: 'rgba(31, 31, 31, 0.9)',
        },
        text: {
            primary: 'rgba(255, 255, 255, 1.0)',
            secondary: 'rgba(255, 255, 255, 1.0)',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3rem',
            letterSpacing: '-0.5px',
        },
        h4: {
            fontWeight: 600,
            marginBottom: '0.5em',
        },
        h5: {
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.95rem',
            color: 'rgba(255, 255, 255, 0.75)',
            marginBottom: '1.5em',
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        body {
          background: linear-gradient(180deg,rgb(20, 20, 20) 0%,rgb(0, 15, 18) 100%);
          background-attachment: fixed;
        }
      `,
        },
        MuiPaper: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(3),
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                }),
            }
        },
        MuiLink: {
            styleOverrides: {
                root: ({ theme }) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    color: theme.palette.primary.light,
                    transition: 'color 0.2s ease, background-color 0.2s ease',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.primary.light, 0.1),
                        textDecoration: 'none',
                    }
                })
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {}
            }
        },
        MuiGrid: {
            styleOverrides: {
                item: {
                    paddingTop: '0 !important',
                    paddingBottom: '0 !important',
                }
            }
        }
    }
});
