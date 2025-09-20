"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type ParticlePointsProps = {
  src: string;
  density?: number; // pixels to skip: 2 = every 2nd pixel
};

function ParticlePoints({ src, density = 3 }: ParticlePointsProps) {
  const texture = useTexture(src);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions and colors from image
  const { positions, colors, count } = useMemo(() => {
    const image = texture.image as HTMLImageElement | ImageBitmap | undefined;
    // Fallback if texture not loaded yet
    if (!image || !("width" in image)) {
      return { positions: new Float32Array(0), colors: new Float32Array(0), count: 0 };
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const iw = (image as HTMLImageElement).width;
    const ih = (image as HTMLImageElement).height;
    canvas.width = iw;
    canvas.height = ih;
    ctx.drawImage(image as HTMLImageElement, 0, 0);
    const imgData = ctx.getImageData(0, 0, iw, ih).data;

    const positionsArray: number[] = [];
    const colorsArray: number[] = [];

    for (let y = 0; y < ih; y += density) {
      for (let x = 0; x < iw; x += density) {
        const idx = (y * iw + x) * 4;
        const r = imgData[idx] / 255;
        const g = imgData[idx + 1] / 255;
        const b = imgData[idx + 2] / 255;
        const a = imgData[idx + 3] / 255;

        // Skip highly transparent/dark pixels to keep particles sparse
        if (a < 0.6) continue;

        // Map pixel to plane space (-1..1) keeping aspect
        const nx = (x / iw) * 2 - 1;
        const ny = 1 - (y / ih) * 2;
        positionsArray.push(nx, ny, 0);
        colorsArray.push(r, g, b);
      }
    }

    const count = positionsArray.length / 3;
    return {
      positions: new Float32Array(positionsArray),
      colors: new Float32Array(colorsArray),
      count,
    };
  }, [texture, density]);

  // animate subtle drift
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const p = pointsRef.current;
    if (!p) return;
    p.rotation.z = Math.sin(t * 0.05) * 0.05;
    p.position.x = Math.sin(t * 0.2) * 0.05;
  });

  if (count === 0) return null;

  return (
    <points ref={pointsRef} scale={[2.6, 2.6, 1]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.015} vertexColors transparent opacity={0.95} depthWrite={false} />
    </points>
  );
}

export default function ParticleBloom() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.8} />
        <Suspense fallback={null}>
          <ParticlePoints src="/images/background.jpg" density={3} />
        </Suspense>
      </Canvas>
    </div>
  );
}


