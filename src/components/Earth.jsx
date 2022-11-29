import React, { useRef } from 'react';
import{ useFrame, useLoader } from "@react-three/fiber";
import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthCloudMap from "../assets/textures/8k_earth_clouds.jpg"
import EarthNightMap from "../assets/textures/8k_earth_nightmap.jpg"
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg"
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg"  
import {TextureLoader} from "three";
import { OrbitControls,Stars } from "@react-three/drei";
import * as THREE from "three";
function index() {

  const [colorMap,normalMap,specularMap,cloudsMap]=useLoader(TextureLoader,[EarthDayMap,EarthNormalMap,EarthSpecularMap,EarthCloudMap]);
  const earthref = useRef();
  const cloudref = useRef();
  useFrame(({clock})=>{
    const elapsedTime=clock.getElapsedTime();
    earthref.current.rotation.y=elapsedTime/6
    cloudref.current.rotation.y=elapsedTime/6
  })
  return (  
    <>
    
    {/* <ambientLight/>its providing light so we can see color */}
    <ambientLight intensity={0.5}/>
    <pointLight color="#fff" position={[2,0,2]} intensity={1.2}/>
    <Stars radius={300} depth={60} count={10000} factor={6} saturation={0} fade={true}/>
    <mesh ref={cloudref}>
      <sphereGeometry args={[1.004,32,32]}/>
      <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} /> 
    </mesh>
    <mesh ref={earthref}>
        <sphereGeometry args={[1,32,32]}/>
        <meshPhongMaterial specularMap={specularMap}/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap}  metalness={0.4} roughness={0.6}/> 
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>  
    
    </mesh>
     
    </>
  )
}

export default index