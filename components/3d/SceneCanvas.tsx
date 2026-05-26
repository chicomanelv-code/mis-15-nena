'use client';

import { Canvas } from '@react-three/fiber';
//import { OrbitControls, Environment } from '@react-three/drei';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);


function ElementoAnimado() {
    // Cambiamos a Group porque los modelos 3D suelen tener múltiples partes
    const meshRef = useRef<THREE.Group>(null);

    // Cargamos el archivo. Asegúrate de que el nombre coincida exactamente con el que extrajiste
    const { scene } = useGLTF('/models/vestido/scene.glb');

    useEffect(() => {
        if (!meshRef.current) return;

        gsap.to(meshRef.current.rotation, {
            y: Math.PI * 2,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });
    }, []);

    return (
        <group ref={meshRef}>
            {/* primitive es el componente que inyecta modelos externos. 
                Le damos una escala y posición inicial para centrarlo */}
            <primitive object={scene} scale={1} position={[0, -1, 0]} />
        </group>
    );
}

export default function SceneCanvas() {
    return (
        <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#0F0A1A]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#B28DFF" />

                {/* AQUÍ ESTÁ EL CAMBIO: Llamamos a la función que tiene la animación */}
                <ElementoAnimado />

                <OrbitControls enableZoom={false} />
                <Environment preset="city" />

            </Canvas>
        </div>
    );
}