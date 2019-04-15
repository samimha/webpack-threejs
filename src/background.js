import * as THREE from "three";
import galaxy_starfield from "./textures/galaxy_starfield.png";
import hangar from "./textures/hangar.jpg";

export const getBackground = () => {
  const galaxyBackground = new THREE.TextureLoader().load(galaxy_starfield);
  const galaxyGeometry = new THREE.SphereGeometry(150, 64, 64);
  const galaxyMaterial = new THREE.MeshPhongMaterial({
    transparent: true,
    map: galaxyBackground,
    shininess: 0
  });
  galaxyMaterial.side = THREE.DoubleSide;
  var galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
  return galaxy;
};

export const getHangarBackground = () => {
  const hangarBackground = new THREE.TextureLoader().load(hangar);
  const hangarGeometry = new THREE.SphereGeometry(150, 64, 64);
  const hangarMaterial = new THREE.MeshPhongMaterial({
    transparent: true,
    map: hangarBackground,
    shininess: 0
  });
  hangarMaterial.side = THREE.DoubleSide;
  var hangarMesh = new THREE.Mesh(hangarGeometry, hangarMaterial);
  return hangarMesh;
};
