import { OrbitControls } from "@react-three/drei";
import { useControls, button } from "leva";

const Scene = () => {
  const { position, color, wireframe, scale } = useControls("cube", {
    position: { value: { x: 0, y: 0, z: 0 }, min: -10, max: 10, step: 0.01 },
    color: "#ffffff",
    wireframe: false,
    click: button(() => {
      console.log("clicked");
    }),
    scale: {
      options: [1, 2, 3],
    },
  });

  console.log(scale);
  const { xRotation } = useControls("sphere", { xRotation: 0 });
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 2, 4]} />
      <mesh position={[position.x, position.y, position.z]} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </mesh>
      <mesh position={[-2, 0, 0]} xRotation={xRotation}>
        <sphereBufferGeometry />
        <meshBasicMaterial color={"red"} />
      </mesh>
      <OrbitControls />
    </>
  );
};

export default Scene;
