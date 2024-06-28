import {
  OrbitControls,
  useHelper,
  Sparkles,
  Stars,
  Cloud,
  Sky,
  Environment,
  Lightformer,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useControls } from "leva";
const Scene = () => {
  const lightRef = useRef();
  // useHelper(lightRef, THREE.DirectionalLightHelper, 1);
  const { sunPosition } = useControls("sky", {
    sunPosition: [0, 1, 0],
  });

  const { height, radious, scale } = useControls("groud", {
    height: { value: 6, min: 0, max: 20 },
    radious: { value: 60, min: 0, max: 100 },
    scale: { value: 70, min: 0, max: 100 },
  });

  const { meshIntensity } = useControls("mesh Intensity", {
    meshIntensity: { value: 1, min: 0, max: 5 },
  });
  return (
    <>
      {/* <ambientLight />
      <directionalLight ref={lightRef} /> */}
      <OrbitControls />
      <mesh position-y={1} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7C7C7" envMapIntensity={meshIntensity} />
      </mesh>
      {/* <Sparkles
        count={300}
        speed={0.2}
        opacity={3}
        color="yellow"
        scale={[10, 10, 10]}
        size={2}
      /> */}
      {/* <Stars
        radius={2}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Cloud
        opacity={1}
        speed={0.2}
        width={10}
        depth={1.5}
        segments={40}
        depthTest={false}
      /> */}
      {/* <Sky sunPosition={sunPosition} /> */}
      <Environment
        // background
        files={"./envMap/1.hdr"}
        ground={{ height: height, radius: radious, scale: scale }}
      >
        {/* <mesh position-x={-1} scale={5}>
          <planeGeometry />
          <meshBasicMaterial color={"orange"} />
        </mesh> */}
        {/* <Lightformer position-x={-1} scale={5} color={"orange"} intensity={5} /> */}
      </Environment>
      <mesh receiveShadow position-y={-1} rotation-x={Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Scene;
