import React from 'react'; // Necessário porque usamos JSX (ícones)
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ScienceIcon from '@mui/icons-material/Science';
import YardIcon from '@mui/icons-material/Yard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LaunchIcon from '@mui/icons-material/Launch';

// Combina projetos e outros links em uma única lista
export const portfolioItems = [
    {
        category: 'Projeto Pessoal',
        icon: <ScienceIcon fontSize="large" />,
        title: 'particle.js',
        description: 'Um simulador 3D interativo de física de partículas n-body, construído com WebGL para\nvisualização direta no navegador.',
        imgSrc: '/img/particlejs.png', // Caminho relativo à pasta 'public'
        links: [
            { href: 'https://andrenepomuceno.github.io/particle.js/', text: 'Demo Online', icon: <LaunchIcon fontSize="small" /> },
            { href: 'https://github.com/andrenepomuceno/particle.js', text: 'Ver Código', icon: <GitHubIcon fontSize="small" /> },
            { href: 'https://www.youtube.com/watch?v=z5RhBaDnkOE&list=PLr48cTU7J6cyvKp1v-1bpH4j5qCZbR-AV', text: 'Vídeo', icon: <YouTubeIcon fontSize="small" /> }, // Link pode estar inválido
            { href: 'https://photos.app.goo.gl/1x41ZhipNKr5yrYa7', text: 'Galeria', icon: <PhotoLibraryIcon fontSize="small" /> },
        ],
    },
    {
        category: 'Projeto Pessoal',
        icon: <YardIcon fontSize="large" />,
        title: 'ESP Garden',
        description: 'Sistema automatizado para irrigação e monitoramento de jardins utilizando microcontrolador ESP32,\ncom integração em nuvem.',
        imgSrc: '/img/espgarden.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/esp_garden', text: 'Ver Código', icon: <GitHubIcon fontSize="small" /> },
        ],
    },
    {
        category: 'Projeto Pessoal',
        icon: <AccountBalanceWalletIcon fontSize="large" />,
        title: 'wallet.py',
        description: 'Aplicação web desenvolvida com Flask para gerenciamento e análise detalhada de\nportfólios de investimentos.',
        imgSrc: '/img/wallet.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/wallet.py', text: 'Ver Código', icon: <GitHubIcon fontSize="small" /> },
        ],
    },
    {
        category: 'Link',
        icon: <DescriptionIcon fontSize="large" />,
        title: 'Currículo Profissional',
        description: 'Acesse meu currículo completo e atualizado, detalhando experiências, habilidades e formação acadêmica.',
        imgSrc: '/img/resume.png',
        links: [
            { href: 'https://docs.google.com/document/d/1IuWmcUzSy_nhkxQhbehwFq9WCi36_4RsOJz01w84eMs/edit?usp=sharing', text: 'Abrir Currículo', icon: <LaunchIcon fontSize="small" /> },
        ],
    },
    {
        category: 'Link',
        icon: <GitHubIcon fontSize="large" />,
        title: 'Perfil no GitHub',
        description: 'Explore meus projetos open-source, contribuições e atividades na plataforma GitHub.',
        imgSrc: '/img/github.png',
        links: [
            { href: 'https://github.com/andrenepomuceno', text: 'Visitar Perfil', icon: <LaunchIcon fontSize="small" /> },
        ],
    },
];
