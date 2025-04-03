import React from 'react';
// Imports de Material UI e Ícones permanecem os mesmos
import { createTheme, ThemeProvider, CssBaseline, Container, Typography, Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Link, Box, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ScienceIcon from '@mui/icons-material/Science';
import YardIcon from '@mui/icons-material/Yard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings'; // Mantido para consistência, embora não usado diretamente no header agora
import CodeIcon from '@mui/icons-material/Code';

// Definição do tema 'elegantDarkTheme' permanece a mesma
const elegantDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a6d4fa',
    },
    secondary: {
      main: '#f4a2a3',
    },
    background: {
      default: '#0f0f0f',
      paper: '#1a1a1a',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.6)',
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
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
    },
    body2: {
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.7)',
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '16px',
          border: `1px solid ${theme.palette.divider}`,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          backgroundColor: theme.palette.background.paper,
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: `0 12px 24px rgba(0, 0, 0, 0.3)`,
          },
        }),
      },
    },
     MuiCardHeader: {
        styleOverrides: {
            root: {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
            title: {
                fontWeight: 'bold',
                fontSize: '0.9rem',
            },
            avatar: {
                 color: 'primary.main', // Cor do ícone no avatar do header
            }
        }
     },
    MuiCardMedia: {
        styleOverrides: {
            root: {
                // Removendo bordas da imagem para um visual mais limpo com imagens reais
                // borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }
        }
    },
    MuiLink: {
        styleOverrides: {
            root: ({ theme }) => ({
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                textDecoration: 'none',
                fontWeight: 500,
                color: theme.palette.primary.light,
                transition: 'color 0.2s ease',
                '&:hover': {
                    color: theme.palette.common.white,
                    textDecoration: 'underline',
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
    }
  }
});


// --- REMOVIDA A FUNÇÃO placeholderImage ---

// Dados dos Projetos com caminhos para imagens na pasta public/img/
const projects = [
  {
    type: 'Projeto Pessoal',
    icon: <ScienceIcon />,
    title: 'particle.js',
    description: 'Um simulador 3D de física de partículas n-body baseado em WebGL.',
    // Caminho relativo à pasta 'public'
    imgSrc: '/img/particlejs.png',
    links: [
      { href: 'https://andrenepomuceno.github.io/particle.js/', text: 'Demo', icon: <HomeIcon fontSize="small"/> },
      { href: 'https://github.com/andrenepomuceno/particle.js', text: 'GitHub', icon: <GitHubIcon fontSize="small"/> },
      { href: 'https://www.youtube.com/watch?v=z5RhBaDnkOE&list=PLr48cTU7J6cyvKp1v-1bpH4j5qCZbR-AV', text: 'Youtube', icon: <YouTubeIcon fontSize="small"/> }, // Link inválido
      { href: 'https://photos.app.goo.gl/1x41ZhipNKr5yrYa7', text: 'Fotos', icon: <PhotoLibraryIcon fontSize="small"/> },
    ],
    cardBgColor: 'background.paper',
  },
  {
    type: 'Projeto Pessoal',
    icon: <YardIcon />,
    title: 'ESP Garden',
    description: 'Dispositivo automático de irrigação e monitoramento de jardins baseado em ESP32.',
     // Caminho relativo à pasta 'public'
    imgSrc: '/img/espgarden.png',
    links: [
      { href: 'https://github.com/andrenepomuceno/esp_garden', text: 'GitHub', icon: <GitHubIcon fontSize="small"/> },
    ],
     cardBgColor: 'background.paper',
  },
  {
    type: 'Projeto Pessoal',
    icon: <AccountBalanceWalletIcon />,
    title: 'wallet.py',
    description: 'Aplicação web em Flask para gerenciar e analisar portfólios de investimento.',
     // Caminho relativo à pasta 'public'
    imgSrc: '/img/wallet.png',
    links: [
      { href: 'https://github.com/andrenepomuceno/wallet.py', text: 'GitHub', icon: <GitHubIcon fontSize="small"/> },
    ],
     cardBgColor: 'background.paper',
  },
];

// Outros Links com caminhos para imagens na pasta public/img/
const otherLinks = [
 {
    type: 'Currículo',
    icon: <DescriptionIcon />,
    title: 'Currículo profissional e informações de contato.',
    description: 'Acesse meu currículo detalhado no Google Docs.',
     // Caminho relativo à pasta 'public'
    imgSrc: '/img/resume.png',
    links: [
      { href: 'https://docs.google.com/document/d/1IuWmcUzSy_nhkxQhbehwFq9WCi36_4RsOJz01w84eMs/edit?usp=sharing', text: 'Ver Currículo', icon: <DescriptionIcon fontSize="small"/> },
    ],
     cardBgColor: 'background.paper',
  },
  {
    type: 'GitHub',
    icon: <GitHubIcon />,
    title: 'Perfil no GitHub.',
    description: 'Explore meus repositórios e contribuições no GitHub.',
     // Caminho relativo à pasta 'public'
    imgSrc: '/img/github.png',
    links: [
      { href: 'https://github.com/andrenepomuceno', text: 'Ver Perfil', icon: <GitHubIcon fontSize="small"/> },
    ],
     cardBgColor: 'background.paper',
  },
];

function App() {
  return (
    <ThemeProvider theme={elegantDarkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 6 }}>

        {/* Seção Hero */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
           <Avatar sx={{ width: 80, height: 80, margin: '0 auto 16px', bgcolor: 'primary.main' }}>
             <CodeIcon fontSize="large" />
           </Avatar>
          <Typography variant="h1" component="h1" gutterBottom>
            André Nepomuceno
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'text.secondary', mb: 2, maxWidth: '600px', margin: '0 auto' }}>
            Bem-vindo à minha página pessoal! Explore meus projetos, currículo e outras informações.
          </Typography>
        </Box>

        {/* Grid para Cards */}
        <Grid container spacing={5} justifyContent="center">
          {[...projects, ...otherLinks].map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: item.cardBgColor }}>
                <CardHeader
                  avatar={item.icon}
                  title={item.type}
                  titleTypographyProps={{ variant: 'overline' }}
                  sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}
                />
                {/* CardMedia agora usa o imgSrc atualizado */}
                <CardMedia
                  component="img"
                  height="320"
                  image={item.imgSrc} // Usa o caminho direto da pasta public
                  alt={`Imagem de ${item.title}`} // Texto alt descritivo
                  sx={{ objectFit: 'cover' }}
                   // Adiciona tratamento de erro básico para a imagem
                  onError={(e) => {
                      e.target.onerror = null; // Previne loop infinito se a imagem padrão também falhar
                      // Opcional: definir uma imagem padrão ou estilo alternativo
                      e.target.src = 'https://placehold.co/300x190/1a1a1a/666?text=Imagem+Nao+Encontrada';
                      e.target.style.objectFit = 'contain'; // Ajusta para mostrar o texto do placeholder
                    }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1 }}>
                     {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-start', flexWrap: 'wrap', gap: 1.5, p: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  {item.links.map((link, linkIndex) => (
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={linkIndex}
                      underline="none"
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
                    >
                      {link.icon}
                      {link.text}
                    </Link>
                  ))}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

         {/* Texto de Rodapé */}
        <Typography variant="body2" component="p" sx={{ textAlign: 'center', mt: 8, color: 'text.secondary' }}>
          Obrigado pela visita! Volte sempre.
        </Typography>

      </Container>
    </ThemeProvider>
  );
}

export default App;
