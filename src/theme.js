import { createTheme } from '@mui/material/styles';

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
            secondary: 'rgba(255, 255, 255, 0.7)', // Ajustado para melhor contraste no Paper
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
            marginBottom: '0.5em', // Espaço abaixo do título do item
        },
        h5: {
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.95rem', // Ligeiramente maior para descrição
            color: 'rgba(255, 255, 255, 0.75)', // Melhor contraste
            marginBottom: '1.5em', // Espaço abaixo da descrição
        }
    },
    components: {
        MuiPaper: { // Estilo para o container do texto
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(3),
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '12px', // Cantos arredondados
                    height: '100%', // Ocupar altura total do Grid item
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Centralizar conteúdo verticalmente se houver espaço
                }),
            }
        },
        MuiLink: {
            styleOverrides: {
                root: ({ theme }) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px', // Mais espaço no link
                    textDecoration: 'none',
                    fontWeight: 500,
                    color: theme.palette.primary.light,
                    transition: 'color 0.2s ease, background-color 0.2s ease',
                    padding: '4px 8px', // Padding para criar um fundo no hover
                    borderRadius: '4px',
                    '&:hover': {
                        color: theme.palette.common.black, // Texto escuro no hover
                        backgroundColor: theme.palette.primary.light, // Fundo claro no hover
                        textDecoration: 'none', // Manter sem sublinhado
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
        MuiGrid: { // Estilo para os containers dos itens
            styleOverrides: {
                item: { // Garante que os itens do grid não tenham padding indesejado
                    paddingTop: '0 !important',
                    paddingBottom: '0 !important',
                }
            }
        }
    }
});
