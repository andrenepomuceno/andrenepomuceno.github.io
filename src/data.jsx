import React from 'react'; // Needed because we use JSX (icons)
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
// Note: HomeIcon was imported but not used in the original Portuguese version. Removed for clarity unless needed elsewhere.
// import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ScienceIcon from '@mui/icons-material/Science';
import YardIcon from '@mui/icons-material/Yard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LaunchIcon from '@mui/icons-material/Launch';

// Combine projects and other links into a single list
export const portfolioItems = [
    {
        category: 'Personal Project', // Traduzido
        icon: <ScienceIcon fontSize="large" />,
        title: 'particle.js',
        description: 'An interactive 3D n-body particle physics simulator, built with WebGL for direct browser visualization.', // Traduzido
        imgSrc: '/img/particlejs.png', // Path relative to the 'public' folder
        links: [
            { href: 'https://andrenepomuceno.github.io/particle.js/', text: 'Online Demo', icon: <LaunchIcon fontSize="small" /> }, // Traduzido
            { href: 'https://github.com/andrenepomuceno/particle.js', text: 'View Code', icon: <GitHubIcon fontSize="small" /> }, // Traduzido
            { href: 'https://www.youtube.com/watch?v=z5RhBaDnkOE&list=PLr48cTU7J6cyvKp1v-1bpH4j5qCZbR-AV', text: 'Video', icon: <YouTubeIcon fontSize="small" /> }, // Traduzido (Link might be invalid)
            { href: 'https://photos.app.goo.gl/1x41ZhipNKr5yrYa7', text: 'Gallery', icon: <PhotoLibraryIcon fontSize="small" /> }, // Traduzido
        ],
    },
    {
        category: 'Personal Project', // Traduzido
        icon: <YardIcon fontSize="large" />,
        title: 'ESP Garden',
        description: 'Automated system for garden irrigation and monitoring using an ESP32 microcontroller, with cloud integration.', // Traduzido
        imgSrc: '/img/espgarden.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/esp_garden', text: 'View Code', icon: <GitHubIcon fontSize="small" /> }, // Traduzido
        ],
    },
    {
        category: 'Personal Project', // Traduzido
        icon: <AccountBalanceWalletIcon fontSize="large" />,
        title: 'wallet.py',
        description: 'Web application developed with Flask for detailed management and analysis of investment portfolios.', // Traduzido
        imgSrc: '/img/wallet.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/wallet.py', text: 'View Code', icon: <GitHubIcon fontSize="small" /> }, // Traduzido
        ],
    },
    {
        category: 'Link', // Mantido (ou poderia ser 'Important Link')
        icon: <DescriptionIcon fontSize="large" />,
        title: 'Professional Resume', // Traduzido
        description: 'Access my complete and updated resume, detailing experiences, skills, and academic background.', // Traduzido
        imgSrc: '/img/resume.png',
        links: [
            { href: 'https://docs.google.com/document/d/1IuWmcUzSy_nhkxQhbehwFq9WCi36_4RsOJz01w84eMs/edit?usp=sharing', text: 'Open Resume', icon: <LaunchIcon fontSize="small" /> }, // Traduzido
        ],
    },
    {
        category: 'Link', // Mantido
        icon: <GitHubIcon fontSize="large" />,
        title: 'GitHub Profile', // Traduzido
        description: 'Explore my open-source projects, contributions, and activities on the GitHub platform.', // Traduzido
        imgSrc: '/img/github.png',
        links: [
            { href: 'https://github.com/andrenepomuceno', text: 'Visit Profile', icon: <LaunchIcon fontSize="small" /> }, // Traduzido
        ],
    },
];