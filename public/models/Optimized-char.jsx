
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes} = useGLTF('/model-char.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/model-char.glb')