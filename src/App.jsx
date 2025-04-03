import React from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

// Import theme, data, and item component // Traduzido
import { elegantDarkTheme } from './theme';
import { portfolioItems } from './data'; // Assuming data.jsx is already translated
import PortfolioItem from './components/PortfolioItem';

function App() {
  return (
    // Apply MUI theme // Traduzido
    <ThemeProvider theme={elegantDarkTheme}>
      {/* Normalize styles and apply theme background */} {/* Traduzido */}
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 6 }}>

        {/* Hero Section (Introductory) */} {/* Traduzido */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
           <Avatar sx={{ width: 80, height: 80, margin: '0 auto 16px', bgcolor: 'primary.main' }}>
             <CodeIcon fontSize="large" />
           </Avatar>
          {/* Title remains the same (proper name) */}
          <Typography variant="h1" component="h1" gutterBottom>
            André Nepomuceno
          </Typography>
          {/* Subtitle translated */}
          <Typography variant="h6" component="p" sx={{ color: 'text.secondary', mb: 2, maxWidth: '600px', margin: '0 auto' }}>
            Welcome to my personal page! Explore my projects, resume, and other information.
          </Typography>
        </Box>

        {/* Layout using the PortfolioItem component */} {/* Traduzido */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* Map data and render a PortfolioItem for each */} {/* Traduzido */}
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </Box>

         {/* Footer Text */} {/* Traduzido */}
         {/* Footer text translated */}
        <Typography variant="body2" component="p" sx={{ textAlign: 'center', mt: 10, color: 'text.secondary' }}>
          Thanks for visiting! Come back anytime.
        </Typography>

      </Container>
    </ThemeProvider>
  );
}

export default App;