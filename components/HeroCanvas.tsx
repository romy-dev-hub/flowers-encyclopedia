"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type PetalProps = {
  color?: string;
  seed?: number;
};

function Petal({ color = "#f472b6", seed = 0 }: PetalProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const { position, rotationAxis, scale } = useMemo(() => {
    // Simple seeded RNG (LCG)
    let lcg = (s: number) => () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
    const rnd = lcg(seed || 1);

    const px = (rnd() - 0.5) * 8;
    const py = (rnd() - 0.2) * 3 + 1.2;
    const pz = (rnd() - 0.5) * 2;
    const axis = new THREE.Vector3(rnd(), rnd(), rnd()).normalize();
    const s = 0.2 + rnd() * 0.4;
    return { position: new THREE.Vector3(px, py, pz), rotationAxis: axis, scale: s };
  }, [seed]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current) return;
    meshRef.current.position.y = position.y + Math.sin(t * 0.6 + seed) * 0.2;
    meshRef.current.rotation.x = t * 0.3 + seed * 0.1;
    meshRef.current.rotation.y = t * 0.2 + seed * 0.2;
    meshRef.current.rotateOnAxis(rotationAxis, 0.002);
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  const petals = useMemo(() => new Array(16).fill(0).map((_, i) => i), []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas shadows camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} intensity={0.8} castShadow />
        <Suspense fallback={null}>
          {petals.map((i) => (
            <Petal key={i} seed={i * 37} />
          ))}
        </Suspense>
        
      </Canvas>
    </div>
  );
}


