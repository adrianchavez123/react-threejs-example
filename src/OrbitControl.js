import { OrbitControls } from "@react-three/drei";
const OrbitControl = () => {
  return (
    <>
      <OrbitControls
        // enableDamping={true}
        // dampingFactor={0.08}
        // autoRotate={true}
        // autoRotateSpeed={8}
        maxAzimuthAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4}
      />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </>
  );
};
export default OrbitControl;
