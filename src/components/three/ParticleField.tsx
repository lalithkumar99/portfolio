'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 90;
const CONNECT_DIST = 2.2;
const MAX_LINES = COUNT * 8;

interface ParticlesProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

function ParticlesMesh({ mouseRef }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { size } = useThree();

  // Pre-allocate typed arrays
  const { positions, homePos, velocities, colors } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const homePos = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    const aspect = size.width / Math.max(size.height, 1);
    const spreadX = 7 * Math.max(aspect, 1);
    const spreadY = 6;

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * spreadX;
      const y = (Math.random() - 0.5) * spreadY;
      const z = (Math.random() - 0.5) * 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      homePos[i * 3] = x;
      homePos[i * 3 + 1] = y;
      homePos[i * 3 + 2] = z;

      // Color: mix of indigo/violet/cyan
      const t = Math.random();
      if (t < 0.45) {
        // indigo
        colors[i * 3] = 0.39;
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 0.94;
      } else if (t < 0.8) {
        // violet
        colors[i * 3] = 0.55;
        colors[i * 3 + 1] = 0.36;
        colors[i * 3 + 2] = 0.96;
      } else {
        // cyan
        colors[i * 3] = 0.02;
        colors[i * 3 + 1] = 0.71;
        colors[i * 3 + 2] = 0.83;
      }
    }

    return { positions, homePos, velocities, colors };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linePositions = useMemo(() => new Float32Array(MAX_LINES * 6), []);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const pts = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const aspect = size.width / Math.max(size.height, 1);

    // Map NDC mouse to world space
    const mx = mouseRef.current.x * 5 * Math.max(aspect, 1);
    const my = mouseRef.current.y * 3.5;

    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      const iy = ix + 1;

      // Spring back to home
      velocities[ix] += (homePos[ix] - pts[ix]) * 0.004;
      velocities[iy] += (homePos[iy] - pts[iy]) * 0.004;

      // Mouse repulsion
      const dx = pts[ix] - mx;
      const dy = pts[iy] - my;
      const distSq = dx * dx + dy * dy;
      const threshold = 2.5;

      if (distSq < threshold * threshold && distSq > 0.0001) {
        const dist = Math.sqrt(distSq);
        const force = ((threshold - dist) / threshold) * 0.06;
        velocities[ix] += (dx / dist) * force;
        velocities[iy] += (dy / dist) * force;
      }

      // Damp & integrate
      velocities[ix] *= 0.88;
      velocities[iy] *= 0.88;
      pts[ix] += velocities[ix];
      pts[iy] += velocities[iy];
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Update line connections
    let lineIdx = 0;
    for (let i = 0; i < COUNT && lineIdx < MAX_LINES; i++) {
      for (let j = i + 1; j < COUNT && lineIdx < MAX_LINES; j++) {
        const ax = pts[i * 3], ay = pts[i * 3 + 1];
        const bx = pts[j * 3], by = pts[j * 3 + 1];
        const dx = ax - bx, dy = ay - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          linePositions[lineIdx * 6 + 0] = ax;
          linePositions[lineIdx * 6 + 1] = ay;
          linePositions[lineIdx * 6 + 2] = pts[i * 3 + 2];
          linePositions[lineIdx * 6 + 3] = bx;
          linePositions[lineIdx * 6 + 4] = by;
          linePositions[lineIdx * 6 + 5] = pts[j * 3 + 2];
          lineIdx++;
        }
      }
    }

    const lineGeo = linesRef.current.geometry;
    const lineAttr = lineGeo.attributes.position;
    (lineAttr.array as Float32Array).set(linePositions);
    lineAttr.needsUpdate = true;
    lineGeo.setDrawRange(0, lineIdx * 2);
  });

  return (
    <>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          vertexColors
          transparent
          opacity={0.75}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </lineSegments>
    </>
  );
}

export default function ParticleField({ mouseRef }: ParticlesProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ParticlesMesh mouseRef={mouseRef} />
    </Canvas>
  );
}
