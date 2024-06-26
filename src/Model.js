import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
const Model = () => {
  // const model = useLoader(GLTFLoader, "./model/dog.glb");
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  console.log(model);
  console.log(animations);

  useEffect(() => {
    animations.actions.Idle.play();
  }, []);
  return <primitive position-y={2} object={model.scene} />;
};

useGLTF.preload("./model/dog.glb");

export default Model;
