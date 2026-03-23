import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveSurface = () => {
  const meshRef = useRef();

  // Create refined grid geometry (Plane)
  // Higher segments for smoother waves
  const { positions, originalZ } = useMemo(() => {
    const width = 15;
    const height = 15;
    const segments = 60;
    
    const geometry = new THREE.PlaneGeometry(width, height, segments, segments);
    const pos = geometry.attributes.position.array;
    const origZ = new Float32Array(pos.length / 3);
    
    for (let i = 0; i < origZ.length; i++) {
      origZ[i] = pos[i * 3 + 2];
    }
    
    return { positions: pos, originalZ: origZ };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const posAttribute = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < originalZ.length; i++) {
        const x = posAttribute.getX(i);
        const y = posAttribute.getY(i);
        
        // Complex wave using multiple sine/cosine functions for fluid motion
        const z = originalZ[i] + 
                  Math.sin(x * 0.5 + time) * 0.3 + 
                  Math.cos(y * 0.3 + time * 0.8) * 0.2 +
                  Math.sin((x + y) * 0.2 + time * 0.5) * 0.1;
        
        posAttribute.setZ(i, z);
    }
    
    posAttribute.needsUpdate = true;
    
    // Subtle rotation for extra depth
    meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.05;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -2]}>
      <planeGeometry args={[15, 15, 60, 60]} />
      <meshStandardMaterial 
        color="#6d28d9" 
        wireframe={true} 
        transparent={true} 
        opacity={0.3} 
        emissive="#3b82f6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6d28d9" />
        <WaveSurface />
        <fog attach="fog" args={['#020617', 5, 15]} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
