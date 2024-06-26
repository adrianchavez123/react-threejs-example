import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Bike from "./Bike";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight />
      <OrbitControls />

      <Suspense
        fallback={
          <mesh>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <Model />
      </Suspense>
      <Bike position={[-0.5, -0.5, 0]} scale={0.85} />
    </>
  );
};

export default Scene;
