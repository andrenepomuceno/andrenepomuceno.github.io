import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ScienceIcon from '@mui/icons-material/Science';
import YardIcon from '@mui/icons-material/Yard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LaunchIcon from '@mui/icons-material/Launch';

export const portfolioItems = [
    {
        category: 'Personal Project',
        icon: <ScienceIcon fontSize="large" />,
        title: 'particle.js',
        description: 'An interactive 3D n-body particle physics simulator, built with WebGL for direct browser visualization.',
        imgSrc: '/img/particlejs.png',
        links: [
            { href: 'https://andrenepomuceno.github.io/particle.js/', text: 'Online Demo', icon: <LaunchIcon fontSize="small" /> },
            { href: 'https://github.com/andrenepomuceno/particle.js', text: 'View Code', icon: <GitHubIcon fontSize="small" /> },
            { href: 'https://www.youtube.com/watch?v=z5RhBaDnkOE&list=PLr48cTU7J6cyvKp1v-1bpH4j5qCZbR-AV', text: 'Video', icon: <YouTubeIcon fontSize="small" /> },
            { href: 'https://photos.app.goo.gl/1x41ZhipNKr5yrYa7', text: 'Gallery', icon: <PhotoLibraryIcon fontSize="small" /> },
        ],
    },
    {
        category: 'Personal Project',
        icon: <YardIcon fontSize="large" />,
        title: 'ESP Garden',
        description: 'Automated system for garden irrigation and monitoring using an ESP32 microcontroller, with cloud integration.',
        imgSrc: '/img/espgarden.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/esp_garden', text: 'View Code', icon: <GitHubIcon fontSize="small" /> },
        ],
    },
    {
        category: 'Personal Project',
        icon: <AccountBalanceWalletIcon fontSize="large" />,
        title: 'wallet.py',
        description: 'Web application developed with Flask for detailed management and analysis of investment portfolios.',
        imgSrc: '/img/wallet.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/wallet.py', text: 'View Code', icon: <GitHubIcon fontSize="small" /> },
        ],
    }
];