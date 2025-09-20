"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Flower() {
  const groupRef = useRef<THREE.Group>(null);
  const petalsRef = useRef<THREE.Group>(null);
  const centerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    // Gentle rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
    }
    
    // Breathing animation
    if (petalsRef.current) {
      const breath = 1 + Math.sin(t * 1.5) * 0.1;
      petalsRef.current.scale.setScalar(breath);
    }
    
    // Center pulsing
    if (centerRef.current) {
      const pulse = 1 + Math.sin(t * 2) * 0.15;
      centerRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Petals */}
      <group ref={petalsRef}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.3}>
            <mesh
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 0.8,
                Math.sin((i / 8) * Math.PI * 2) * 0.3,
                0
              ]}
              rotation={[0, 0, (i / 8) * Math.PI * 2]}
            >
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#f472b6" : "#ec4899"} 
                roughness={0.3}
                metalness={0.1}
              />
            </mesh>
          </Float>
        ))}
      </group>
      
      {/* Center */}
      <mesh ref={centerRef}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
      
      {/* Stem */}
      <mesh position={[0, -1.2, 0]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.05, 0.08, 1.5, 8]} />
        <meshStandardMaterial 
          color="#16a34a" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* Leaves */}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 2) * 0.3,
            -0.8 + i * 0.2,
            Math.cos(i * 2) * 0.1
          ]}
          rotation={[0, i * 0.5, 0]}
        >
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshStandardMaterial 
            color="#22c55e" 
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FlowerFocus() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <color attach="background" args={["#fef7f0"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={0.8} />
        <pointLight position={[-2, -1, 3]} intensity={0.3} color="#fbbf24" />
        
        <Suspense fallback={null}>
          <Flower />
          <Sparkles 
            count={20} 
            scale={2} 
            size={2} 
            speed={0.4} 
            color="#f472b6"
            opacity={0.6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
