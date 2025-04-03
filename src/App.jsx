import React from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

// Importa o tema, os dados e o componente de item
import { elegantDarkTheme } from './theme';
import { portfolioItems } from './data';
import PortfolioItem from './components/PortfolioItem'; // Assumindo que PortfolioItem.jsx está em src/components/

function App() {
  return (
    // Aplica o tema MUI
    <ThemeProvider theme={elegantDarkTheme}>
      <CssBaseline /> {/* Normaliza estilos e aplica fundo do tema */}
      <Container maxWidth="lg" sx={{ py: 6 }}>

        {/* Seção Hero (Introdutória) */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
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

        {/* Layout usando o componente PortfolioItem */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* Mapeia os dados e renderiza um PortfolioItem para cada */}
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </Box>

         {/* Texto de Rodapé */}
        <Typography variant="body2" component="p" sx={{ textAlign: 'center', mt: 10, color: 'text.secondary' }}>
          Obrigado pela visita! Volte sempre.
        </Typography>

      </Container>
    </ThemeProvider>
  );
}

export default App;
