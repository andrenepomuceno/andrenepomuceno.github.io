
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Box } from '@mui/material';



const fireflyColor1 = '#ADFF2F';
const fireflyColor2 = '#DAA520';
const fireflyColor3 = '#FFFFE0';


const vertexShader = `/* Vertex Shader será atualizado */`;
const fragmentShader = `/* Fragment Shader será atualizado */`;

function AnimatedBackground() {
    const mountRef = useRef(null);
    const clockRef = useRef(new THREE.Clock());

    useEffect(() => {
        let reqId;
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        currentRef.appendChild(renderer.domElement);

        const particleCount = 1000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const aBlinkOffset = new Float32Array(particleCount);

        const colorPalette = [
            new THREE.Color(fireflyColor1),
            new THREE.Color(fireflyColor2),
            new THREE.Color(fireflyColor3)
        ];

        const spread = 500;

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            positions[i3 + 0] = (Math.random() - 0.5) * spread;
            positions[i3 + 1] = (Math.random() - 0.5) * spread;
            positions[i3 + 2] = (Math.random() - 0.5) * spread;

            const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i3 + 0] = randomColor.r;
            colors[i3 + 1] = randomColor.g;
            colors[i3 + 2] = randomColor.b;

            aBlinkOffset[i] = Math.random() * 5.0;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particlesGeometry.setAttribute('aBlinkOffset', new THREE.BufferAttribute(aBlinkOffset, 1));


        const particlesMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0.0 },
                uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
                uSize: { value: 500.0 },

                uBlinkSpeed: { value: 1.0 },
                uBlinkPeriod: { value: 7.0 },
                uBlinkDuration: { value: 0.9 }
            },
            vertexShader: updatedVertexShader,
            fragmentShader: updatedFragmentShader,
            transparent: true,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
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
            const elapsedTime = clockRef.current.getElapsedTime();

            particlesMaterial.uniforms.uTime.value = elapsedTime;

            particleSystem.rotation.x += 0.00003;
            particleSystem.rotation.y += 0.00005;

            camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
            camera.position.y += (-mouse.y * 5 - camera.position.y) * 0.02;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        clockRef.current = new THREE.Clock();
        animate();

        const handleResize = () => {

            const { clientWidth: newWidth, clientHeight: newHeight } = currentRef;
            if (newWidth > 0 && newHeight > 0) {
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(newWidth, newHeight);
                particlesMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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


const updatedVertexShader = `

  attribute float aBlinkOffset; 

  uniform float uTime; 
  uniform float uPixelRatio;
  uniform float uSize;

  varying vec3 vColor;
  varying float vBlinkOffset; 

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    
    gl_PointSize = uSize * uPixelRatio;
    gl_PointSize *= (1.0 / -viewPosition.z); 

    vColor = color;
    vBlinkOffset = aBlinkOffset; 
  }
`;

const updatedFragmentShader = `
  varying vec3 vColor;
  varying float vBlinkOffset; 

  uniform float uTime;
  uniform float uBlinkSpeed;
  uniform float uBlinkPeriod;
  uniform float uBlinkDuration; 

  
  #define PI 3.14159265359

  void main() {
    
    float blinkCycleTime = mod(uTime * uBlinkSpeed + vBlinkOffset, uBlinkPeriod);
    
    float blinkFactor = 0.0;
    if (blinkCycleTime < uBlinkDuration) {
        
        float glowProgress = blinkCycleTime / uBlinkDuration;
        
        blinkFactor = sin(glowProgress * PI);
        
    }
    
    float dist = distance(gl_PointCoord, vec2(0.5));
    
    float strength = 1.0 - smoothstep(0.3, 0.5, dist);
    
    float finalAlpha = strength * blinkFactor;

    if (finalAlpha < 0.01) {
        discard;
    }

    
    gl_FragColor = vec4(vColor, finalAlpha);
  }
`;


export default AnimatedBackground;