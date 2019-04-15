import * as THREE from "three";

export const getPointLight = () => {
  const pointLight = new THREE.PointLight("magenta", 9, 200);
  pointLight.position.set(10, 10, 35);
  return pointLight;
};

export const getPointLightCyan = () => {
  const pointLight = new THREE.PointLight("cyan", 9, 200);
  pointLight.position.set(-10, -10, -35);
  return pointLight;
};

export const getLight = () => {
  const light = new THREE.PointLight(0xffabba);
  light.position.set(10, 10, 35);
  light.intensity = 2;
  return light;
};
