// src/components/AnimatedBackground.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Box } from '@mui/material';

// Import colors from theme if possible, or redefine them here
// Assuming these are your theme colors:
const primaryColor = '#a6d4fa';
const secondaryColor = '#f4a2a3'; // Example secondary color
const neutralColor = '#ffffff'; // Example neutral color

function AnimatedBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        let reqId;
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        // --- Loader de Textura ---
        const textureLoader = new THREE.TextureLoader();
        // !!! IMPORTANTE: Certifique-se que 'particle.png' existe na pasta /public !!!
        const particleTexture = textureLoader.load('/particle.svg');

        // --- Criação das Partículas (com Cores Variadas) ---
        const particleCount = 1000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3); // Array para as cores (r, g, b)

        // Paleta de cores para as partículas
        const colorPalette = [
            new THREE.Color(primaryColor),
            new THREE.Color(secondaryColor),
            new THREE.Color(neutralColor)
        ];

        const radius = 300;
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3; // Índice base para x, y, z e r, g, b

            // Posições aleatórias
            positions[i3 + 0] = (Math.random() - 0.5) * radius; // x
            positions[i3 + 1] = (Math.random() - 0.5) * radius; // y
            positions[i3 + 2] = (Math.random() - 0.5) * radius; // z

            // Escolhe uma cor aleatória da paleta
            const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i3 + 0] = randomColor.r; // r
            colors[i3 + 1] = randomColor.g; // g
            colors[i3 + 2] = randomColor.b; // b
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); // Adiciona o atributo de cor

        // --- Material das Partículas (usando Textura e Cores de Vértice) ---
        const particlesMaterial = new THREE.PointsMaterial({
            size: 1.0,               // Ajuste o tamanho conforme necessário para a textura
            map: particleTexture,     // Aplica a textura carregada
            vertexColors: true,       // !!! Habilita o uso das cores do atributo 'color' !!!
            sizeAttenuation: true,
            transparent: true,
            // alphaTest: 0.5,        // Descomente se a textura tiver áreas transparentes que não rendem bem
            // blending: THREE.AdditiveBlending, // Opcional: Partículas sobrepostas ficam mais brilhantes
            depthWrite: false,        // Opcional: Melhora a renderização de partículas transparentes
        });

        const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particleSystem);

        // --- Mouse Tracking (sem alterações) ---
        const mouse = new THREE.Vector2(0, 0);
        const handleMouseMove = (event) => {
            mouse.x = (event.clientX / width) * 2 - 1;
            mouse.y = -(event.clientY / height) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // --- Animação (sem alterações na lógica principal) ---
        const animate = () => {
            reqId = requestAnimationFrame(animate);

            particleSystem.rotation.y += 0.00001;
            particleSystem.rotation.x += 0.00002;

            camera.position.x += (mouse.x * 5 - camera.position.x) * 0.001;
            camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.001;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        animate();

        // --- Handler de Redimensionamento (sem alterações) ---
        const handleResize = () => {
           // ... (código do resize sem alterações) ...
            const { clientWidth: newWidth, clientHeight: newHeight } = currentRef;
            if (newWidth > 0 && newHeight > 0) { // Prevent errors on minimize
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(newWidth, newHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // --- Limpeza (sem alterações) ---
        return () => {
            // ... (código de limpeza sem alterações) ...
            cancelAnimationFrame(reqId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (currentRef && renderer.domElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                currentRef.removeChild(renderer.domElement);
            }
            scene.remove(particleSystem);
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            particleTexture.dispose(); // Dispose da textura também!
            renderer.dispose();
        };
    }, []);

    return (
        <Box
            ref={mountRef}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        />
    );
}

export default AnimatedBackground;