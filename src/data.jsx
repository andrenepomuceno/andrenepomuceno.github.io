import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ScienceIcon from '@mui/icons-material/Science';
import YardIcon from '@mui/icons-material/Yard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LaunchIcon from '@mui/icons-material/Launch';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ForestIcon from '@mui/icons-material/Forest';
import GridOnIcon from '@mui/icons-material/GridOn';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import ArticleIcon from '@mui/icons-material/Article';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import HubIcon from '@mui/icons-material/Hub';
import PublicIcon from '@mui/icons-material/Public';

// Text fields are plain strings (same in every language) or { en, 'pt-BR' } objects, read with localize().
const PERSONAL_PROJECT = { en: 'Personal Project', 'pt-BR': 'Projeto pessoal' };
const STUDY_MATERIAL = { en: 'Study Material', 'pt-BR': 'Material de estudo' };
const LINK = {
    demo: { en: 'Online Demo', 'pt-BR': 'Demo online' },
    code: { en: 'View Code', 'pt-BR': 'Ver código' },
    video: { en: 'Video', 'pt-BR': 'Vídeo' },
    gallery: { en: 'Gallery', 'pt-BR': 'Galeria' },
    pdf: { en: 'Read PDF', 'pt-BR': 'Ler PDF (em inglês)' },
};
const TAG = {
    physics: { en: 'Physics', 'pt-BR': 'Física' },
    simulation: { en: 'Simulation', 'pt-BR': 'Simulação' },
    finance: { en: 'Finance', 'pt-BR': 'Finanças' },
    fieldTheory: { en: 'Field Theory', 'pt-BR': 'Teoria de campos' },
    latticeGauge: { en: 'Lattice Gauge', 'pt-BR': 'Gauge na rede' },
    generalRelativity: { en: 'General Relativity', 'pt-BR': 'Relatividade geral' },
    electromagnetics: { en: 'Electromagnetics', 'pt-BR': 'Eletromagnetismo' },
    classicalMechanics: { en: 'Classical Mechanics', 'pt-BR': 'Mecânica clássica' },
    lieAlgebras: { en: 'Lie Algebras', 'pt-BR': 'Álgebras de Lie' },
    conservationLaws: { en: 'Conservation Laws', 'pt-BR': 'Leis de conservação' },
    numericalMethods: { en: 'Numerical Methods', 'pt-BR': 'Métodos numéricos' },
    standardModel: { en: 'Standard Model', 'pt-BR': 'Modelo Padrão' },
    qft: { en: 'Quantum Field Theory', 'pt-BR': 'Teoria quântica de campos' },
    relativity: { en: 'Relativity', 'pt-BR': 'Relatividade' },
};

export const portfolioItems = [
    {
        category: PERSONAL_PROJECT,
        icon: <ScienceIcon fontSize="large" />,
        title: 'particle.js',
        description: {
            en: 'A GPU n-body particle physics simulator in the browser, rewritten from scratch as v2. You write the forces as expressions or potentials; they are differentiated exactly, compiled to GLSL and evaluated for every particle pair on the GPU. Special relativity is one switch away (Minkowski metric, retarded Liénard–Wiechert fields), and dozens of scenarios go from galaxies and plasmas to quark confinement.',
            'pt-BR': 'Um simulador de física de partículas de n corpos na GPU, no navegador, reescrito do zero como v2. Você escreve as forças como expressões ou potenciais; elas são derivadas de forma exata, compiladas para GLSL e avaliadas para cada par de partículas na GPU. A relatividade especial está a um clique (métrica de Minkowski, campos retardados de Liénard–Wiechert), e dezenas de cenários vão de galáxias e plasmas ao confinamento de quarks.',
        },
        tags: ['TypeScript', 'React', 'Three.js', 'WebGL2', 'GLSL', TAG.physics],
        imgSrc: '/img/particlejs-v2.webp',
        links: [
            { href: 'https://www.andrenepomuceno.com.br/particle.js/', text: LINK.demo, icon: <LaunchIcon fontSize="small" /> },
            { href: 'https://github.com/andrenepomuceno/particle.js', text: LINK.code, icon: <GitHubIcon fontSize="small" /> },
            { href: 'https://www.youtube.com/watch?v=z5RhBaDnkOE&list=PLr48cTU7J6cyvKp1v-1bpH4j5qCZbR-AV', text: LINK.video, icon: <YouTubeIcon fontSize="small" /> },
            { href: 'https://photos.app.goo.gl/1x41ZhipNKr5yrYa7', text: LINK.gallery, icon: <PhotoLibraryIcon fontSize="small" /> },
        ],
    },
    {
        category: PERSONAL_PROJECT,
        icon: <GridOnIcon fontSize="large" />,
        title: 'lattice.js',
        description: {
            en: 'An interactive toy model of classical and quantum fields on a lattice, in the browser. Each site carries a phase, a complex field, a spin or a Higgs doublet; you write the energy and the forces come out by exact automatic differentiation. Scenarios go from waves, kinks and vortices to skyrmions, the Meissner effect, electroweak Z-strings and SU(2) Yang–Mills flux tubes, each one checked against known physics.',
            'pt-BR': 'Um toy model interativo de campos clássicos e quânticos numa rede, no navegador. Cada sítio carrega uma fase, um campo complexo, um spin ou um dubleto de Higgs; você escreve a energia e as forças saem por diferenciação automática exata. Os cenários vão de ondas, kinks e vórtices a skyrmions, efeito Meissner, Z-strings eletrofracas e tubos de fluxo de Yang–Mills SU(2), cada um conferido contra a física conhecida.',
        },
        tags: ['TypeScript', 'React', 'Three.js', 'WebGL2', TAG.fieldTheory, TAG.latticeGauge],
        imgSrc: '/img/lattice-js.webp',
        links: [
            { href: 'https://www.andrenepomuceno.com.br/lattice.js/', text: LINK.demo, icon: <LaunchIcon fontSize="small" /> },
        ],
    },
    {
        category: PERSONAL_PROJECT,
        icon: <BlurCircularIcon fontSize="large" />,
        title: 'Metric Shaders',
        description: {
            en: 'Raymarched scenes rendered along the geodesics of a Riemannian metric you control: gravitational lensing, curved and hyperbolic space, wormhole-like throats, mirages, endless fractal zooms and 4D cross-sections. Metrics are typed as expressions, differentiated exactly and compiled to GLSL, and every pixel integrates its own light ray on the GPU, all from a static web page.',
            'pt-BR': 'Cenas em raymarching renderizadas ao longo das geodésicas de uma métrica riemanniana que você controla: lentes gravitacionais, espaços curvos e hiperbólicos, gargantas tipo buraco de minhoca, miragens, zooms fractais sem fim e cortes 4D. As métricas são digitadas como expressões, derivadas de forma exata e compiladas para GLSL, e cada pixel integra o próprio raio de luz na GPU, tudo numa página web estática.',
        },
        tags: ['JavaScript', 'Three.js', 'GLSL', 'Raymarching', TAG.generalRelativity],
        imgSrc: '/img/metric-shaders.webp',
        links: [
            { href: 'https://www.andrenepomuceno.com.br/metric-shaders/', text: LINK.demo, icon: <LaunchIcon fontSize="small" /> },
        ],
    },
    {
        category: PERSONAL_PROJECT,
        icon: <ForestIcon fontSize="large" />,
        title: 'BiomeSimulator',
        description: {
            en: 'Browser-based 2D ecosystem simulation: a procedurally generated world with biomes, rivers, and seasonal climate, populated by autonomous plants and animals that self-regulate through life cycles, predation, and competition.',
            'pt-BR': 'Simulação 2D de ecossistema no navegador: um mundo gerado proceduralmente, com biomas, rios e clima sazonal, povoado por plantas e animais autônomos que se autorregulam por ciclos de vida, predação e competição.',
        },
        tags: ['JavaScript', 'React', 'PixiJS', TAG.simulation],
        imgSrc: '/img/biome-simulator.png',
        links: [
            { href: 'https://www.andrenepomuceno.com.br/BiomeSimulator/', text: LINK.demo, icon: <LaunchIcon fontSize="small" /> },
            { href: 'https://github.com/andrenepomuceno/BiomeSimulator', text: LINK.code, icon: <GitHubIcon fontSize="small" /> },
        ],
    },
    {
        category: PERSONAL_PROJECT,
        icon: <YardIcon fontSize="large" />,
        title: 'ESP Garden',
        description: {
            en: 'Automated system for garden irrigation and monitoring using an ESP32 microcontroller, with cloud integration.',
            'pt-BR': 'Sistema automatizado de irrigação e monitoramento de jardim com um microcontrolador ESP32, integrado à nuvem.',
        },
        tags: ['C++', 'ESP32', 'IoT', 'MQTT'],
        imgSrc: '/img/espgarden.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/esp_garden', text: LINK.code, icon: <GitHubIcon fontSize="small" /> },
        ],
    },
    {
        category: PERSONAL_PROJECT,
        icon: <AccountBalanceWalletIcon fontSize="large" />,
        title: 'wallet.py',
        description: {
            en: 'Web application developed with Flask for detailed management and analysis of investment portfolios.',
            'pt-BR': 'Aplicação web em Flask para gestão e análise detalhada de carteiras de investimento.',
        },
        tags: ['Python', 'Flask', TAG.finance],
        archived: true,
        imgSrc: '/img/wallet.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/wallet.py', text: LINK.code, icon: <GitHubIcon fontSize="small" /> },
        ],
    },
    {
        category: PERSONAL_PROJECT,
        icon: <ElectricBoltIcon fontSize="large" />,
        title: 'em-sim',
        description: {
            en: '2D electromagnetic wave simulation using the FDTD method (Yee grid) with TEz polarization, Mur absorbing boundaries, and live visualization.',
            'pt-BR': 'Simulação 2D de ondas eletromagnéticas pelo método FDTD (grade de Yee), com polarização TEz, contornos absorventes de Mur e visualização ao vivo.',
        },
        tags: ['Python', 'NumPy', 'FDTD', TAG.electromagnetics],
        archived: true,
        imgSrc: '/img/em-sim.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/em-sim', text: LINK.code, icon: <GitHubIcon fontSize="small" /> },
        ],
    },
    {
        category: PERSONAL_PROJECT,
        icon: <WaterDropIcon fontSize="large" />,
        title: 'fluid-sim',
        description: {
            en: '2D fluid simulation suite featuring Navier-Stokes (finite difference) and Lattice-Boltzmann (D2Q9) solvers with real-time visualization.',
            'pt-BR': 'Conjunto de simulações 2D de fluidos com solvers de Navier-Stokes (diferenças finitas) e Lattice-Boltzmann (D2Q9), com visualização em tempo real.',
        },
        tags: ['Python', 'NumPy', 'CFD', 'Lattice-Boltzmann'],
        archived: true,
        imgSrc: '/img/fluid-sim.png',
        links: [
            { href: 'https://github.com/andrenepomuceno/fluid-sim', text: LINK.code, icon: <GitHubIcon fontSize="small" /> },
        ],
    },
];

export const articles = [
    {
        category: { en: 'Article · October 2026', 'pt-BR': 'Artigo · outubro de 2026' },
        icon: <ArticleIcon fontSize="large" />,
        title: 'Conservation laws as Lie-algebra membership: a unified classroom view of state-dependent matrix flows',
        description: {
            en: 'Conservation laws are usually taught one at a time, each with its own proof: the length of a rotating vector, the energy of an oscillator, the total amount of a diffusing substance, the spacetime interval under a Lorentz boost. Written as a matrix multiplying the state, all four follow from one short calculation: a quantity is conserved when the matrix satisfies the algebraic condition that defines its symmetry group.\n\nThe paper uses this to show three points students often miss: the same motion can be described by different matrices, each revealing a different conserved quantity; conserving a quantity is not the same as being Hamiltonian; and, on a computer, how the error of a numerical method behaves over long times matters more than its size over short times. Aimed at graduate courses in classical mechanics and mathematical methods; every result is reproduced by a short script.',
            'pt-BR': 'Leis de conservação costumam ser ensinadas uma de cada vez, cada uma com a sua demonstração: o comprimento de um vetor que gira, a energia de um oscilador, a quantidade total de uma substância que se difunde, o intervalo de espaço-tempo sob um boost de Lorentz. Com as equações escritas como uma matriz que multiplica o estado, as quatro saem de um único cálculo curto: uma grandeza se conserva quando a matriz satisfaz a condição algébrica que define o seu grupo de simetria.\n\nO artigo usa essa ideia para mostrar três pontos que os estudantes costumam perder: o mesmo movimento pode ser descrito por matrizes diferentes, cada uma revelando uma grandeza conservada diferente; conservar uma grandeza não é o mesmo que ser hamiltoniano; e, no computador, o comportamento do erro de um método numérico em tempos longos importa mais do que o seu tamanho em tempos curtos. Voltado a cursos de pós-graduação em mecânica clássica e métodos matemáticos; cada resultado é reproduzido por um script curto.',
        },
        tags: [TAG.classicalMechanics, TAG.lieAlgebras, TAG.conservationLaws, TAG.numericalMethods],
        imgSrc: '/img/article-conservation-laws.webp',
        links: [
            { href: '/papers/conservation-laws-lie-algebra-membership.pdf', text: LINK.pdf, icon: <PictureAsPdfIcon fontSize="small" /> },
        ],
    },
    {
        category: STUDY_MATERIAL,
        icon: <HubIcon fontSize="large" />,
        title: { en: 'Standard Model: study material', 'pt-BR': 'Modelo Padrão: material de estudo' },
        description: {
            en: 'An interactive page for studying the Standard Model, quantum physics and quantum field theory, in the browser. A cheatsheet opens with the Standard Model Lagrangian, each line leading to its explanation; the fundamental particles are laid out in 3D; the decay modes of the PDG 2026 can be filtered and searched, with sourced theoretical predictions next to their experimental limits; and Feynman diagrams drawn in 3D light up the matching term of the amplitude, with sliders for energy and angle.\n\nEvery number on the page has a traceable source (a PDG measurement, a paper or a tested calculation), shown next to the measured value and the deviation.',
            'pt-BR': 'Uma página interativa para estudar o Modelo Padrão, física quântica e teoria quântica de campos, no navegador. A cheatsheet abre com a lagrangiana do Modelo Padrão, cada linha levando à sua explicação; as partículas fundamentais aparecem em 3D; os modos de decaimento do PDG 2026 têm filtros e busca, com previsões teóricas, cada uma com fonte, ao lado do limite experimental; e diagramas de Feynman desenhados em 3D acendem o termo correspondente da amplitude, com controles de energia e ângulo.\n\nTodo número da página tem origem rastreável (uma medida do PDG, um artigo ou um cálculo testado), mostrado ao lado do valor medido e do desvio.',
        },
        tags: ['TypeScript', 'React', 'Three.js', TAG.standardModel, TAG.qft],
        imgSrc: '/img/sm-study.webp',
        links: [
            { href: 'https://www.andrenepomuceno.com.br/sm-study/', text: LINK.demo, icon: <LaunchIcon fontSize="small" /> },
        ],
    },
    {
        category: STUDY_MATERIAL,
        icon: <PublicIcon fontSize="large" />,
        title: { en: 'Classical physics and relativity: study material', 'pt-BR': 'Física clássica e relatividade: material de estudo' },
        description: {
            en: 'The companion of the Standard Model page, for mechanics, electromagnetism, waves, optics, thermodynamics, transport phenomena and special and general relativity. A cheatsheet starts from the actions of the theories, from the Newtonian particle to Einstein–Hilbert; the Sun, planets and compact objects come with JPL and CODATA values; the tests of relativity sit next to their measurements, with the GWOSC catalog of gravitational-wave events; and a laboratory of 3D scenes, from the double pendulum to Schwarzschild geodesics and frame dragging in Kerr, links each element of the scene to its term in the equations.\n\nThe same rule applies: every number has a traceable source, and an approximation is shown as one, next to the measured value and the deviation.',
            'pt-BR': 'A companheira da página do Modelo Padrão, para mecânica, eletromagnetismo, ondas, ótica, termodinâmica, fenômenos de transporte e as relatividades restrita e geral. A cheatsheet parte das ações das teorias, da partícula newtoniana a Einstein–Hilbert; o Sol, os planetas e objetos compactos vêm com valores do JPL e da CODATA; os testes da relatividade ficam ao lado das medidas, com o catálogo de ondas gravitacionais do GWOSC; e um laboratório de cenas em 3D, do pêndulo duplo às geodésicas de Schwarzschild e ao arrasto de referencial em Kerr, liga cada elemento da cena ao seu termo nas equações.\n\nA regra é a mesma: todo número tem origem rastreável, e uma aproximação aparece como tal, ao lado do valor medido e do desvio.',
        },
        tags: ['TypeScript', 'React', 'Three.js', 'Chart.js', TAG.classicalMechanics, TAG.relativity],
        imgSrc: '/img/classic-study.webp',
        links: [
            { href: 'https://www.andrenepomuceno.com.br/classic-study/', text: LINK.demo, icon: <LaunchIcon fontSize="small" /> },
        ],
    },
];
