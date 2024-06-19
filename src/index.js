import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Scene from "./Scene";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        // position: [2, 2, 5]
      }}
    >
      <Scene />
    </Canvas>
  </>
);
