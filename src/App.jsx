import React from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

import { elegantDarkTheme } from './theme';
import { portfolioItems } from './data';
import PortfolioItem from './components/PortfolioItem';

function App() {
  return (
    <ThemeProvider theme={elegantDarkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Avatar sx={{ width: 80, height: 80, margin: '0 auto 16px', bgcolor: 'primary.main' }}>
            <CodeIcon fontSize="large" />
          </Avatar>
          <Typography variant="h1" component="h1" gutterBottom>
            André Nepomuceno
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'text.secondary', mb: 2, maxWidth: '600px', margin: '0 auto' }}>
            Welcome to my personal page! Explore my projects, resume, and other information.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </Box>

        <Typography variant="body2" component="p" sx={{ textAlign: 'center', mt: 10, color: 'text.secondary' }}>
          Thanks for visiting! Come back anytime.
          <Box component="span" sx={{ display: 'block', fontSize: '0.8em', mt: 1, opacity: 0.7 }}>
            v{import.meta.env.VITE_APP_VERSION}
          </Box>
        </Typography>

      </Container>
    </ThemeProvider>
  );
}

export default App;