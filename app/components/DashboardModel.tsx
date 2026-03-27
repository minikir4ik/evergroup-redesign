"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export default function DashboardModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Main dashboard panel */}
      <RoundedBox args={[4, 2.4, 0.05]} radius={0.08} smoothness={4}>
        <meshPhysicalMaterial
          color="#111827"
          roughness={0.3}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          transparent
          opacity={0.95}
        />
      </RoundedBox>

      {/* Screen content area */}
      <RoundedBox args={[3.8, 2.2, 0.01]} radius={0.06} smoothness={4} position={[0, 0, 0.03]}>
        <meshBasicMaterial color="#0a0f1e" />
      </RoundedBox>

      {/* Header bar */}
      <RoundedBox args={[3.8, 0.15, 0.01]} radius={0.02} smoothness={2} position={[0, 0.95, 0.04]}>
        <meshBasicMaterial color="#1e2d40" />
      </RoundedBox>

      {/* Chart bars */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const height = [0.6, 0.8, 0.5, 1.0, 0.7, 0.9, 0.65][i];
        return (
          <RoundedBox
            key={i}
            args={[0.25, height, 0.01]}
            radius={0.02}
            smoothness={2}
            position={[-1.5 + i * 0.45, -0.3 + height / 2, 0.04]}
          >
            <meshBasicMaterial color={i === 3 ? "#4f6ef7" : "#1e2d40"} />
          </RoundedBox>
        );
      })}

      {/* KPI cards */}
      {[-1.2, 0, 1.2].map((x, i) => (
        <RoundedBox key={i} args={[1.0, 0.4, 0.01]} radius={0.04} smoothness={2} position={[x, 0.55, 0.04]}>
          <meshBasicMaterial color="#1a2332" />
        </RoundedBox>
      ))}

      {/* Accent line at bottom */}
      <mesh position={[0, -0.9, 0.04]}>
        <planeGeometry args={[3.8, 0.003]} />
        <meshBasicMaterial color="#4f6ef7" />
      </mesh>

      {/* Glow underneath */}
      <mesh position={[0, -1.5, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 3]} />
        <meshBasicMaterial color="#4f6ef7" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}
