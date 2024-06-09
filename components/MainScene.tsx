"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function House() {
  const doorTextures = useTexture({
    map: "/textures/door/color.jpg",
    alphaMap: "/textures/door/alpha.jpg",
    aoMap: "/textures/door/ambientOcclusion.jpg",
    displacementMap: "/textures/door/height.jpg",
    normalMap: "/textures/door/normal.jpg",
    metalnessMap: "/textures/door/metalness.jpg",
    roughnessMap: "/textures/door/roughness.jpg",
  });

  const brickTextures = useTexture({
    map: "/textures/bricks/color.jpg",
    aoMap: "/textures/bricks/ambientOcclusion.jpg",
    normalMap: "/textures/bricks/normal.jpg",
    roughnessMap: "/textures/bricks/roughness.jpg",
  });

  return (
    <group>
      <mesh name="main" position={[0, 1.25, 0]}>
        <boxGeometry args={[4, 2.5, 4]} />
        <meshStandardMaterial {...brickTextures} />
      </mesh>

      <mesh name="garage" position={[3.5, 1.25, 0]}>
        <boxGeometry args={[3, 2.5, 3]} />
        <meshStandardMaterial {...brickTextures} />
      </mesh>

      <mesh name="secondFloor" position={[0, 3.25, 0]}>
        <boxGeometry args={[3, 1.5, 3]} />
        <meshStandardMaterial {...brickTextures} />
      </mesh>

      <mesh name="terrace" position={[0, 4.5, 0]}>
        <boxGeometry args={[2, 1.5, 2]} />
        <meshStandardMaterial {...brickTextures} />
      </mesh>

      <mesh
        name="topRoof"
        position={[0, 6, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
      >
        <coneGeometry args={[1.65, 1.5, 4]} />
        <meshStandardMaterial color={0xb35f45} />
      </mesh>

      <mesh
        name="garageRoof"
        position={[3.5, 2.75, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
      >
        <cylinderGeometry args={[1, 2.15, 0.5, 4]} />
        <meshStandardMaterial color={0xb35f45} />
      </mesh>

      <mesh
        name="scaffold"
        position={[0, 3, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
      >
        <cylinderGeometry args={[1, 2.85, 1, 4]} />
        <meshStandardMaterial color={0xb35f45} />
      </mesh>

      <mesh
        name="secondScaffold"
        position={[0, 4.5, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
      >
        <cylinderGeometry args={[1, 2.1, 1, 4]} />
        <meshStandardMaterial color={0xb35f45} />
      </mesh>

      <mesh name="door" position={[0, 1, 2.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2.2, 2.2, 100, 100]} />
        <meshStandardMaterial
          {...doorTextures}
          transparent
          displacementScale={0.1}
        />
      </mesh>

      <pointLight
        color="#ff7d46"
        intensity={2.5}
        distance={5}
        position={[0, 2.2, 2.5]}
      />
      <pointLight
        color="#ff7d46"
        intensity={1}
        distance={3}
        position={[0, 5, 1.01]}
      />
    </group>
  );
}

function Graves() {
  const graves = useMemo(() => {
    const graveGeometry = new THREE.BoxGeometry(0.4, 0.7, 0.2);
    const graveMaterial = new THREE.MeshStandardMaterial({ color: "#b2b6b1" });

    return Array.from({ length: 50 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 6;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      return (
        <mesh
          key={i}
          geometry={graveGeometry}
          material={graveMaterial}
          position={[x, 0.3, z]}
          rotation={[
            0,
            (Math.random() - 0.5) * 0.4,
            (Math.random() - 0.5) * 0.4,
          ]}
          castShadow
        />
      );
    });
  }, []);

  return <group>{graves}</group>;
}

function Ghosts() {
  const ghostA = useRef<THREE.PointLight>(null);
  const ghostB = useRef<THREE.PointLight>(null);
  const ghostC = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    const ghostAAngle = elapsedTime * 0.5;

    ghostA.current!.position.x = Math.cos(ghostAAngle) * 5;
    ghostA.current!.position.z = Math.sin(ghostAAngle) * 5;
    ghostA.current!.position.y = Math.sin(elapsedTime * 3);

    const ghostBAngle = -elapsedTime * 0.2;
    ghostB.current!.position.x =
      Math.cos(ghostBAngle) * (3 + Math.cos(elapsedTime * 3));
    ghostB.current!.position.z = Math.sin(ghostBAngle) * 7;
    ghostB.current!.position.y =
      Math.sin(elapsedTime * 2) + Math.sin(elapsedTime * 4);

    const ghostCAngle = elapsedTime * 0.26;
    ghostC.current!.position.x =
      Math.cos(ghostCAngle) * (7 + Math.sin(elapsedTime + 0.3));
    ghostC.current!.position.z =
      Math.sin(ghostCAngle) * (7 + Math.sin(elapsedTime + 0.6));
    ghostC.current!.position.y = Math.sin(elapsedTime * 3);
  });

  return (
    <>
      <pointLight
        ref={ghostA}
        color="#595959"
        intensity={6}
        distance={3}
        castShadow
      />
      <pointLight
        ref={ghostB}
        color="#ff00ff"
        intensity={6}
        distance={3}
        castShadow
      />
      <pointLight
        ref={ghostC}
        color="#fff000"
        intensity={4}
        distance={3}
        castShadow
      />
    </>
  );
}

function Floor() {
  const grassTextures = useTexture({
    map: "/textures/grass/color.jpg",
    aoMap: "/textures/grass/ambientOcclusion.jpg",
    normalMap: "/textures/grass/normal.jpg",
    roughnessMap: "/textures/grass/roughness.jpg",
  });

  const [colorMap, aoMap, normalMap, roughnessMap] =
    Object.values(grassTextures);

  useMemo(() => {
    [colorMap, aoMap, normalMap, roughnessMap].forEach((texture) => {
      texture.repeat.set(8, 8);
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    });
  }, [colorMap, aoMap, normalMap, roughnessMap]);

  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial {...grassTextures} />
    </mesh>
  );
}

function Scene() {
  const { camera } = useThree();

  return (
    <>
      <ambientLight color="#b9d5ff" intensity={0.05} />
      <directionalLight
        color="#b9d5ff"
        intensity={0.075}
        position={[4, 5, -2]}
        castShadow
      />

      <House />
      <Graves />
      <Ghosts />
      <Floor />

      <OrbitControls args={[camera]} enableDamping />
    </>
  );
}

export default function MainScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 2, 5], fov: 75, near: 0.1, far: 100 }}
      onCreated={({ gl }) => {
        gl.setClearColor("#262837");
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight intensity={1} />
      <Scene />
    </Canvas>
  );
}
