"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function CameraRig() {
  const { camera } = useThree();
  const scrollProgress = useRef(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.getElementById("hero"),
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, []);

  useFrame(() => {
    const p = scrollProgress.current;
    camera.position.x = THREE.MathUtils.lerp(0, 1.5, p);
    camera.position.y = THREE.MathUtils.lerp(0.3, 1.8, p);
    camera.position.z = THREE.MathUtils.lerp(4, 5, p);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
