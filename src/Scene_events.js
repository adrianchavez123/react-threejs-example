import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
const Scene = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    console.log("click");
  };
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 2, 4]} />
      <mesh onClick={clickHandler} position-x={1}>
        {/* <mesh onContextMenu={clickHandler} position-x={1}> */}
        {/* <mesh onDoubleClick={clickHandler} position-x={1}> */}
        {/* <mesh onWheel={clickHandler} position-x={1}> */}
        {/* <mesh onPointerUp={clickHandler} position-x={1}> */}
        {/* <mesh onPointerDown={clickHandler} position-x={1}> */}
        {/* <mesh onPointerOver={clickHandler} position-x={1}> */}
        {/* <mesh onPointerOut={clickHandler} position-x={1}> */}
        {/* <mesh onPointerMove={clickHandler} position-x={1}> */}
        {/* <mesh onPointerMissed={clickHandler} position-x={1}> */}
        <boxGeometry />
        <meshStandardMaterial color={active ? "pink" : "orange"} />
      </mesh>
      <mesh
        position-x={-1}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <boxGeometry />
        <meshStandardMaterial color={"purple"} />
      </mesh>
      <OrbitControls />
    </>
  );
};

export default Scene;
