// src/components/AboutMe.jsx
import React from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LaunchIcon from '@mui/icons-material/Launch'; // Keep if using the launch icon on links
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function AboutMe() {
    const profileLinks = [
        // {
        //   href: 'https://docs.google.com/document/d/1IuWmcUzSy_nhkxQhbehwFq9WCi36_4RsOJz01w84eMs/edit?usp=sharing',
        //   text: 'My Resume', // Updated text
        //   icon: <DescriptionIcon fontSize="small" />
        // },
        {
            href: 'https://github.com/andrenepomuceno',
            text: 'GitHub',
            icon: <GitHubIcon fontSize="small" />
        },
        {
            href: 'https://linkedin.com/in/andresiega',
            text: 'LinkedIn',
            icon: <LinkedInIcon fontSize="small" />
        }
    ];


    return (
        <Box sx={{ mb: 8 }}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <PersonIcon color="primary" fontSize="large" />
                    {/* Changed title to English */}
                    <Typography variant="h3" component="h2">
                        About Me
                    </Typography>
                </Box>
                {/* Using Typography with paragraph=true can help with spacing */}
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }} paragraph>
                    {/* Split the text logically for better readability in the code */}
                    For the last 10+ years, I've been diving deep into the world of software and hardware engineering. It's been a fun ride, taking me through challenging projects involving both code and hardware in diverse areas like fintech, medical devices, defense systems, and even renewable energy tech.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }} paragraph>
                    I get a kick out of designing systems built to handle serious scale (millions of connected devices!), optimizing performance, and helping engineering teams thrive. You'll often find me working with embedded systems, cloud infrastructure, or puzzling out hardware and software designs.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }} paragraph>
                    Ultimately, I love solving tricky problems and building robust, efficient solutions that make a difference.
                </Typography>

                {/* Links Section */}
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
                            {/* <LaunchIcon fontSize="inherit" sx={{ ml: 0.5, opacity: 0.7 }} /> */}
                        </Link>
                    ))}
                </Box>
                {/* End Links Section */}

            </Paper>
        </Box>
    );
}

export default AboutMe;