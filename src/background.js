import * as THREE from "three";
import galaxy_starfield from "./textures/galaxy_starfield.png";

export const getBackground = () => {
  const galaxyBackground = new THREE.TextureLoader().load(galaxy_starfield);
  const galaxyGeometry = new THREE.SphereGeometry(60, 64, 64);
  const galaxyMaterial = new THREE.MeshPhongMaterial({
    transparent: true,
    map: galaxyBackground,
    shininess: 0
  });
  galaxyMaterial.side = THREE.DoubleSide;
  var galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
  return galaxy;
};
