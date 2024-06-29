import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import "./styles.css";
import Scene from "./Scene";
const root = ReactDOM.createRoot(document.getElementById("root"));

const creatingCanvasHandler = (state) => {
  // state.gl.setClearColor("cyan", 0.5);
};
root.render(
  <>
    <Canvas
      gl={{
        antialias: true,
        alpha: true,
      }}
      orthographic
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        zoom: 120,
        // position: [0, 0, 5]
      }}
      onCreated={creatingCanvasHandler}
      shadows
    >
      <Scene />
      {/* <Perf position="top-left" /> */}
    </Canvas>
  </>
);
