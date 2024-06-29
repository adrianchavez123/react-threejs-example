import { OrbitControls, Grid, CameraControls } from "@react-three/drei";
import { useRef } from "react";
import { button, buttonGroup, useControls } from "leva";
import * as THREE from "three";

const CameraControl = () => {
  const cameraControlRef = useRef();
  const { DEG2RAD } = THREE.MathUtils;

  const cameraControls = useControls("Camera Controls", {
    horizontalRotation: buttonGroup({
      label: "Horizontal R",
      opts: {
        "45deg": () => {
          cameraControlRef.current.rotate(45 * DEG2RAD, 0, true);
        },
        "-90deg": () => {
          cameraControlRef.current.rotate(-90 * DEG2RAD, 0, true);
        },
        "360deg": () => {
          cameraControlRef.current.rotate(360 * DEG2RAD, 0, true);
        },
      },
    }),
    verticallRotation: buttonGroup({
      label: "Vertical R",
      opts: {
        "20deg": () => {
          cameraControlRef.current.rotate(0, 20 * DEG2RAD, true);
        },
        "-40deg": () => {
          cameraControlRef.current.rotate(0, -40 * DEG2RAD, true);
        },
      },
    }),
    truckRotation: buttonGroup({
      label: "Truck R",
      opts: {
        "(1,0)": () => {
          cameraControlRef.current.truck(1, 0, true);
        },
        "(0,+1)": () => {
          cameraControlRef.current.truck(0, 1, true);
        },
        "(-1,-1)": () => {
          cameraControlRef.current.truck(-1, -1, true);
        },
      },
    }),
    zoomGroup: buttonGroup({
      label: "zoom",
      opts: {
        0.25: () => {
          cameraControlRef.current.zoom(0.25, true);
        },
        "-0.25": () => {
          cameraControlRef.current.zoom(-0.25, true);
        },
      },
    }),
    lookAtBox: button(() => {
      cameraControlRef.current.setLookAt(0, 1, 3, 0, 0, 0, true);
    }),
  });
  return (
    <>
      {/* <OrbitControls /> */}
      <CameraControls ref={cameraControlRef} smoothTime={2} />
      <Grid
        args={[30, 30]}
        cellSize={0.5}
        cellColor="#6f6f6f"
        sectionSize={1}
        sectionThickness={1.5}
        sectionColor="red"
        fadeDistance={20}
        fadeStrength={0.75}
      />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </>
  );
};
export default CameraControl;
