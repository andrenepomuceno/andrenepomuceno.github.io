import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box, Avatar, Tabs, Tab } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import { elegantDarkTheme } from './theme';
import { portfolioItems } from './data';
import PortfolioItem from './components/PortfolioItem';
import AboutMe from './components/AboutMe';
import AnimatedBackground from './components/AnimatedBackground';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={elegantDarkTheme}>
      <CssBaseline />
      {/* Render Background aqui, fora do Container principal */}
      <AnimatedBackground />

      <Container maxWidth="lg" sx={{ py: 6, position: 'relative', zIndex: 1 }}> {/* Garante que o conteúdo fique sobre o background */}
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          {/* ... (código do header) ... */}
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

        {/* Tabs Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          {/* ... (código das Tabs) ... */}
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="Portfolio Sections"
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              icon={<PersonIcon />}
              iconPosition="start"
              label="About Me"
              {...a11yProps(0)}
            />
            <Tab
              icon={<FolderIcon />}
              iconPosition="start"
              label="Projects"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>

        {/* Tab Content Panels */}
        <TabPanel value={selectedTab} index={0}>
          <AboutMe />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} item={item} index={index} />
            ))}
          </Box>
        </TabPanel>

        {/* Footer Section */}
        <Typography variant="body2" component="p" sx={{ textAlign: 'center', mt: 10, color: 'text.secondary' }}>
          {/* ... (código do footer) ... */}
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