"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type AnimatedImageProps = {
  src: string;
};

function AnimatedImagePlane({ src }: AnimatedImageProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(src);

  // Configure texture for better sampling
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const uniforms = useRef({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uAmplitude: { value: 0.06 },
    uFrequency: { value: 2.0 },
    uTint: { value: new THREE.Color(1.0, 0.98, 0.98) },
  }).current;

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} scale={[3.2, 3.2, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform float uAmplitude;
          uniform float uFrequency;

          void main() {
            vUv = uv;
            vec3 pos = position;
            // Gentle wavy distortion
            float wave = sin((pos.y + uTime) * uFrequency) * uAmplitude;
            pos.z += wave;
            pos.x += sin((pos.y * 1.3 + uTime * 0.7)) * uAmplitude * 0.4;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform sampler2D uTexture;
          uniform vec3 uTint;

          // Fit-cover style UV transform keeping center crop
          vec2 coverUv(vec2 uv, vec2 texSize, vec2 planeSize) {
            float rs = planeSize.x / planeSize.y;
            float rt = texSize.x / texSize.y;
            vec2 newSize = rt < rs ? vec2(planeSize.x, planeSize.x / rt) : vec2(planeSize.y * rt, planeSize.y);
            vec2 offset = (newSize - planeSize) / (2.0 * newSize);
            vec2 scale = planeSize / newSize;
            return uv * scale + offset;
          }

          void main() {
            vec2 texSize = vec2(textureSize(uTexture, 0));
            vec2 planeSize = vec2(1024.0, 1024.0);
            vec2 uv = coverUv(vUv, texSize, planeSize);
            vec4 color = texture2D(uTexture, uv);
            // Subtle tint for a cohesive palette
            color.rgb = mix(color.rgb, uTint, 0.04);
            gl_FragColor = color;
          }
        `}
      />
    </mesh>
  );
}

export default function CurvedImageCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <AnimatedImagePlane src="/images/background.jpg" />
      </Canvas>
    </div>
  );
}


