"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import DashboardModel from "./DashboardModel";
import CameraRig from "./CameraRig";

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.3, 4], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={null}>
        <Environment preset="night" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#4f6ef7" />
        <pointLight position={[0, -2, 2]} intensity={0.3} color="#4f6ef7" />
        <DashboardModel />
        <CameraRig />
        <EffectComposer>
          <Bloom intensity={0.4} luminanceThreshold={0.8} luminanceSmoothing={0.9} />
          <Vignette eskil={false} offset={0.1} darkness={0.4} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
