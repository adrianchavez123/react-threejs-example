import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
  const texture = useLoader(THREE.TextureLoader, "./img/1.png");
  console.log(texture);
  return (
    <>
      <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};
export default Scene;
