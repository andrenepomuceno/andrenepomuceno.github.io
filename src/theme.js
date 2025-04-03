import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles'; // Importar alpha para transparência

// Definição do tema 'elegantDarkTheme'
export const elegantDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a6d4fa', // Azul primário
    },
    secondary: {
      main: '#f4a2a3', // Rosa secundário
    },
    background: {
      default: '#0f0f0f', // Fundo principal muito escuro
      paper: '#1f1f1f', // Fundo do Paper um pouco mais claro
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Garante Inter como padrão
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.5px',
    },
    h4: { // Usado para títulos dos itens
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
     MuiPaper: { // Estilo para o container do texto
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
                transition: 'color 0.2s ease, background-color 0.2s ease', // Transição suave
                padding: '4px 8px',
                borderRadius: '4px',
                '&:hover': {
                    // Efeito hover mais sutil: leve fundo e texto um pouco mais claro
                    color: theme.palette.primary.main, // Cor primária no hover
                    backgroundColor: alpha(theme.palette.primary.light, 0.1), // Fundo levemente azulado e transparente
                    textDecoration: 'none',
                }
            })
        }
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                // backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.0))',
            }
        }
    },
    MuiGrid: {
        styleOverrides: {
            item: {
                 paddingTop: '0 !important', // Evita padding extra do Grid item
                 paddingBottom: '0 !important',
            }
        }
    }
  }
});
