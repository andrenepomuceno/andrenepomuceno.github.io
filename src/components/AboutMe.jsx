import React from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BusinessIcon from '@mui/icons-material/Business';
import { useI18n } from '../i18n/context';

function AboutMe() {
    const { t } = useI18n();
    const profileLinks = [
        {
            href: 'https://github.com/andrenepomuceno',
            text: 'GitHub',
            icon: <GitHubIcon fontSize="small" />
        },
        {
            href: 'https://linkedin.com/in/andresiega',
            text: 'LinkedIn',
            icon: <LinkedInIcon fontSize="small" />
        },
        {
            href: 'https://www.youtube.com/@alsn0',
            text: 'YouTube',
            icon: <YouTubeIcon fontSize="small" />
        },
        {
            href: 'https://www.alsnengenharia.com.br/',
            text: 'ALSN Engenharia',
            icon: <BusinessIcon fontSize="small" />
        }
    ];


    return (
        <Box sx={{ mb: 8 }}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <PersonIcon color="primary" fontSize="large" />
                    <Typography variant="h3" component="h2">
                        {t('about.title')}
                    </Typography>
                </Box>
                {['about.p1', 'about.p2', 'about.p3'].map((key) => (
                    <Typography key={key} variant="body1" component="p" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                        {t(key)}
                    </Typography>
                ))}

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 3 }}>
                    {profileLinks.map((link, index) => (
                        <Link
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            underline="none"
                            sx={{ display: 'inline-flex', alignItems: 'center' }}
                        >
                            {link.icon && React.cloneElement(link.icon, { sx: { mr: 0.8 } })}
                            {link.text}
                        </Link>
                    ))}
                </Box>

            </Paper>
        </Box>
    );
}

export default AboutMe;