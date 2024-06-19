import { useRef } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls } from "@react-three/drei";
extend({ OrbitControls: OrbitControls });
const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  const { gl, camera } = useThree();
  // camera.position.x = 5;
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    planeRef.current.rotation.x += delta;

    state.camera.position.x = Math.sin(state.clock.elapsedTime);
  });
  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <OrbitControls />
      <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 5]} />
        <meshBasicMaterial color="orange" wireframe side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={cubeRef} position-x={2}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};
export default Scene;
