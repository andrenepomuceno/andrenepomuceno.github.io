import React, { useState, lazy, Suspense, useRef } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box, Avatar, Tabs, Tab, Fade, ToggleButton, ToggleButtonGroup } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import ArticleIcon from '@mui/icons-material/Article';
import { elegantDarkTheme } from './theme';
import { portfolioItems, articles } from './data';
import { useI18n } from './i18n/context';
import PortfolioItem from './components/PortfolioItem';
import AboutMe from './components/AboutMe';

const AnimatedBackground = lazy(() => import('./components/AnimatedBackground'));

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
                <Fade in timeout={400}>
                    <Box sx={{ pt: 3 }}>
                        {children}
                    </Box>
                </Fade>
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


// Entries with `draft: true` wait for their demo to go live: shown in development and with ?drafts=1, hidden otherwise.
function published(items) {
    const showDrafts = import.meta.env.DEV || new URLSearchParams(window.location.search).has('drafts');
    return showDrafts ? items : items.filter((item) => !item.draft);
}

function App() {
    const { t, lang, setLang } = useI18n();
    const [selectedTab, setSelectedTab] = useState(0);
    const tabsRef = useRef(null);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <ThemeProvider theme={elegantDarkTheme}>
            <CssBaseline />
            <Suspense fallback={null}>
                <AnimatedBackground />
            </Suspense>

            <Container id="main-content" maxWidth="lg" sx={{ py: 6, position: 'relative', zIndex: 1 }}>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: { xs: 2, md: 0 } }}>
                    <ToggleButtonGroup
                        value={lang}
                        exclusive
                        size="small"
                        onChange={(event, next) => { if (next) setLang(next); }}
                        aria-label={t('language.ariaLabel')}
                    >
                        <ToggleButton value="en" lang="en" aria-label="English">EN</ToggleButton>
                        <ToggleButton value="pt-BR" lang="pt-BR" aria-label="Português (Brasil)">PT</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <Box sx={{ textAlign: 'center', mb: 6, animation: 'fadeInUp 0.8s ease-out' }}>

                    <Avatar sx={{ width: 80, height: 80, margin: '0 auto 16px', bgcolor: 'primary.main' }}>
                        <CodeIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="h1" component="h1" gutterBottom>
                        André Nepomuceno
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ color: 'text.secondary', mb: 2, maxWidth: '600px', margin: '0 auto' }}>
                        {t('header.subtitle')}
                    </Typography>
                </Box>

                <Box ref={tabsRef} sx={{ borderBottom: 1, borderColor: 'divider', mb: 4, animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        aria-label={t('tabs.ariaLabel')}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        indicatorColor="primary"
                        textColor="primary"
                        sx={{
                            // Auto margins center the tabs when they fit and collapse to zero when they scroll.
                            '& .MuiTab-root:first-of-type': { ml: 'auto' },
                            '& .MuiTab-root:last-of-type': { mr: 'auto' },
                        }}
                    >
                        <Tab
                            icon={<PersonIcon />}
                            iconPosition="start"
                            label={t('tabs.about')}
                            {...a11yProps(0)}
                        />
                        <Tab
                            icon={<FolderIcon />}
                            iconPosition="start"
                            label={t('tabs.projects')}
                            {...a11yProps(1)}
                        />
                        <Tab
                            icon={<ArticleIcon />}
                            iconPosition="start"
                            label={t('tabs.articles')}
                            {...a11yProps(2)}
                        />
                    </Tabs>
                </Box>

                <TabPanel value={selectedTab} index={0}>
                    <AboutMe />
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {published(portfolioItems).map((item, index) => (
                            <PortfolioItem key={index} item={item} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel value={selectedTab} index={2}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {published(articles).map((item, index) => (
                            <PortfolioItem key={index} item={item} />
                        ))}
                    </Box>
                </TabPanel>

                <Typography variant="body2" component="p" sx={{ textAlign: 'center', mt: 10, color: 'text.secondary', opacity: 0.8 }}>
                    {t('footer.rights')}
                    <Box component="span" sx={{ display: 'block', fontSize: '0.85em', mt: 1 }}>
                        v{import.meta.env.PROD ? import.meta.env.VITE_APP_VERSION : '0.0.0' }
                    </Box>
                </Typography>
            </Container>
        </ThemeProvider>
    );
}

export default App;