import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  CubeCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const Scene = () => {
  const cubeRef = useRef();

  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta;
    cubeRef.current.rotation.y += delta;
  });
  return (
    <>
      <OrbitControls />
      <Environment
        files={"./envMap/3.hdr"}
        ground={{ height: 6, radius: 70, scale: 50 }}
      />
      {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} /> */}
      <CubeCamera resolution={1024} frames={Infinity}>
        {(texture) => (
          <mesh position-y={3}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>
      <mesh position={[0, 3, 5]} ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </>
  );
};

export default Scene;
