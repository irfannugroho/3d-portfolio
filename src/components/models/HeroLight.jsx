import React from 'react'
import * as THREE from 'three'

const HeroLight = () => {
  return (
    <>
      {/* Fill light kiri - nambah cahaya ke sisi gelap wajah */}
      <spotLight
        position={[-4, 4, 3]}
        angle={0.3}
        penumbra={0.6}
        intensity={80}
        color="white"
        castShadow
      />

      {/* Key light kanan (utama) */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={0.5}
        intensity={60}
        color="#4cc9f0"
      />

      {/* Back light ungu */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={50}
        color="#9d4edd"
      />

      {/* Area light cinematic look */}
      <primitive 
        object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      {/* Point light di bawah */}
      <pointLight
        position={[0, 1, 0]}
        intensity={5}
        color="#7209b7"
      />

      {/* Point light dari belakang */}
      <pointLight
        position={[1, 2, -2]}
        intensity={5}
        color="#0d00a4"
      />

      {/* Tambahan ambient light biar merata */}
      <ambientLight intensity={0.2} />
    </>
  )
}

export default HeroLight
