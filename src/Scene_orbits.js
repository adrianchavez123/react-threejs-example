import { useRef } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Custom from "./Custom";
extend({ OrbitControls: OrbitControls });
const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  const { gl, camera } = useThree();

  useFrame((state, delta) => {});
  return (
    <>
      <axesHelper args={[3]} />
      <gridHelper args={[20, 20, 0xff0000, "cyan"]} />
      <OrbitControls />
      <Custom />
      <mesh ref={planeRef} position-x={-2}>
        <boxGeometry />
        <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={cubeRef} position-x={2}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};
export default Scene;
