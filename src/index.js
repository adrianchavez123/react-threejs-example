import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
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
        fov: 45,
        near: 0.1,
        far: 100,
        zoom: 120,
        // position: [2, 2, 5]
      }}
      onCreated={creatingCanvasHandler}
    >
      <Scene />
    </Canvas>
  </>
);
