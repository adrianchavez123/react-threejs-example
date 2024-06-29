import { OrbitControls, TransformControls } from "@react-three/drei";

const TransformControl = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <TransformControls position-x={2}>
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="purple" mode="translate" />
        </mesh>
      </TransformControls>
    </>
  );
};
export default TransformControl;
