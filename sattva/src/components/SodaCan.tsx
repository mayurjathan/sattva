import React, { useEffect, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const flavorTextures = {
  lemonLime: '/labels/image2.png',
  grape: '/labels/image3.png',
  blackCherry: '/labels/login5.png',
  strawberryLemonade: '/labels/image4.png',
  watermelon: '/labels/image5.png',
}
export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};
export function SodaCan({ flavor = 'blackCherry', scale = 10, ...props }:SodaCanProps) {
  // Load the GLTF model
  const { nodes, materials } = useGLTF('/redmi.gltf')

  // Define flavor textures (similar to how you handled the labels for SodaCan)
  const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/labels/login5.png", (loadedTexture) => {
  loadedTexture.flipY = false; // Fix the upside-down texture
});
  const metalMaterial = new THREE.MeshStandardMaterial({
    roughness: 1,
    // metalness: 0.0003,
    map: texture,
  });



  // Load the flavor texture based on the passed flavor
  const labels = useTexture(flavorTextures)
  const label = labels[flavor as keyof typeof flavorTextures] // Add an index signature to allow indexing with a string

  // Fix the label texture by flipping it (if necessary)
  Object.values(labels).forEach((label) => (label.flipY = false))

  // Adjust the position of the model based on its bounding box (like in SodaCan)
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (groupRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current)
      const center = box.getCenter(new THREE.Vector3())
      groupRef.current.position.set(-center.x, -center.y, -center.z)
    }
  }, [nodes])

  return (
    <group {...props} ref={groupRef} dispose={null} scale={scale} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Render the GLTF model with materials and textures */}
      <group scale={[0.997, 1.014, 0.999]}>
        {/* Using the geometry format you requested */}
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001 as THREE.Mesh).geometry}
          material={materials.Plastic_Glossy_Side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_1 as THREE.Mesh).geometry}
          material={materials.Plastic_Mate_Side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_2 as THREE.Mesh).geometry}
          material={materials.Screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_3 as THREE.Mesh).geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_4 as THREE.Mesh).geometry}
          material={materials.Black_Chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_5 as THREE.Mesh).geometry}
          material={materials.Redmi_Logo}
        />
        {/* Apply flavor texture to a specific part of the model */}
        {label && (
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008 as THREE.Mesh).geometry}
            material={materials.Plastic_Mate_Side}
          >
            <meshStandardMaterial map={label} />
          </mesh>
        )}
        {/* Render other meshes with geometry format */}
        <group position={[0, -0.004, 0.078]} rotation={[0.024, 0, 0]} scale={[1, 0.9, 0.9]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Cube008_1 as THREE.Mesh).geometry}
            material={materials.Plastic_Mate_Side}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.AudioContacts as THREE.Mesh).geometry}
          material={materials.Brass}
          position={[-0.025, 0, 0.078]}
          scale={[1.003, 0.987, 1.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Camera_Outer_Frame as THREE.Mesh).geometry}
          material={materials.Plastic_Mate_Side}
          position={[0.019, 0, 0.054]}
          scale={[1.003, 0.987, 1.001]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Camera_Inner_Frame as THREE.Mesh).geometry}
            material={materials.Black_Chrome}
            position={[0, 0.007, 0.013]}
            scale={[0.991, 1, 1.014]}
          />
        </mesh>
        {/* Additional meshes and groups */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube006 as THREE.Mesh).geometry}
          material={materials.ExtraCamerasModule}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube006_1 as THREE.Mesh).geometry}
          material={materials.Plastic_Mate_Side}
        />
      </group>

      {/* Other parts of the model with the geometry format */}
      <group position={[0, -0.003, 0.073]} rotation={[Math.PI / 2, 0, 0]} scale={[0.702, 0.701, 0.691]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere as THREE.Mesh).geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere_1 as THREE.Mesh).geometry}
          material={materials.Black_Chrome}
        />
      </group>
      <group scale={[1.003, 0.987, 1.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube007 as THREE.Mesh).geometry}
          // material={metalMaterial}
        >
        <meshStandardMaterial roughness={0.9} metalness={1} map={label} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube007_1 as THREE.Mesh).geometry}
          material={materials.Glass}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.SIM as THREE.Mesh).geometry}
        material={materials.Plastic_Mate_Side}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Toch_Sensor as THREE.Mesh).geometry}
        material={materials.Plastic_Mate_Side}
      />
      <group position={[0, 0, -0.077]} scale={[1.003, 0.987, 1.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube012 as THREE.Mesh).geometry}
          material={materials.Plastic_Mate_Side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube012_1 as THREE.Mesh).geometry}
          material={materials.Gold_Contacts_USB_C}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube012_2 as THREE.Mesh).geometry}
          material={materials.Aluminum_USB_C}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Volume_Buttons as THREE.Mesh).geometry}
        material={materials.Plastic_Mate_Side}
      />
    </group>
  )
}

useGLTF.preload('/redmi.gltf')
