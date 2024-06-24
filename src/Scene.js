import { OrbitControls } from "@react-three/drei";
import Particles from "./Particles";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <Particles />
    </>
  );
};

export default Scene;
