import React from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes } = useGLTF("/models/model-char.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        castShadow
        receiveShadow
        position={[0, 1, 0]} scale={[4, 4, 4]}

      />
    </group>
  );
}

useGLTF.preload("/models/model-char.glb");
