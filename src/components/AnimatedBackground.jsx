
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Box } from '@mui/material';



const primaryColor = '#a6d4fa';
const secondaryColor = '#f4a2a3'; 
const neutralColor = '#ffffff'; 

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
        
        const textureLoader = new THREE.TextureLoader();
    
        const particleTexture = textureLoader.load('/img/particle.svg');
        
        const particleCount = 1000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3); 

        
        const colorPalette = [
            new THREE.Color(primaryColor),
            new THREE.Color(secondaryColor),
            new THREE.Color(neutralColor)
        ];

        const radius = 300;
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3; 

            
            positions[i3 + 0] = (Math.random() - 0.5) * radius; 
            positions[i3 + 1] = (Math.random() - 0.5) * radius; 
            positions[i3 + 2] = (Math.random() - 0.5) * radius; 

            
            const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i3 + 0] = randomColor.r; 
            colors[i3 + 1] = randomColor.g; 
            colors[i3 + 2] = randomColor.b; 
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); 

        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 1.0,               
            map: particleTexture,     
            vertexColors: true,       
            sizeAttenuation: true,
            transparent: true,
            
            
            depthWrite: false,        
        });

        const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particleSystem);

        
        const mouse = new THREE.Vector2(0, 0);
        const handleMouseMove = (event) => {
            mouse.x = (event.clientX / width) * 2 - 1;
            mouse.y = -(event.clientY / height) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        
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

        const handleResize = () => {
            const { clientWidth: newWidth, clientHeight: newHeight } = currentRef;
            if (newWidth > 0 && newHeight > 0) { 
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(newWidth, newHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(reqId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (currentRef && renderer.domElement) {
                
                currentRef.removeChild(renderer.domElement);
            }
            scene.remove(particleSystem);
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            particleTexture.dispose(); 
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