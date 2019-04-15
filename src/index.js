import * as THREE from "three";
import * as OrbitControls from "three-orbitcontrols";
import { getPointLight } from "./lights";
import { getHangarBackground } from "./background";

// create a scene
const scene = new THREE.Scene();

// create a box
const geometry = new THREE.BoxGeometry(10, 20, 30);

// Create cube camera
var cubeCamera = new THREE.CubeCamera(1, 100000, 128);
scene.add(cubeCamera);

// Create chrome Material
var chromeMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  envMap: cubeCamera.renderTarget.texture
});

const box = new THREE.Mesh(geometry, chromeMaterial);
scene.add(box);

// create a camera and set position
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;

// create a renderer & add to DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// set & start rendering the scene
const render = () => {
  requestAnimationFrame(render);
  box.rotation.x += 0.02;
  box.rotation.y += 0.03;
  box.rotation.z += 0.05;

  // Update the render target cube
  box.visible = false;
  cubeCamera.position.copy(box.position);
  cubeCamera.update(renderer, scene);

  // Render the scene
  box.visible = true;
  renderer.render(scene, camera);
};
render();

console.log("Here is your scene", scene);

// adapt camera & renderer to browser window resizing
window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },
  false
);

// create orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 100;
controls.maxPolarAngle = Math.PI / 2;

//add lights
const light = getPointLight();
const light2 = getPointLight();
light2.position.set(-10, -10, -35);
scene.add(light, light2);

//add background
const hangar = getHangarBackground();

scene.add(hangar);

var animate = function() {
  requestAnimationFrame(animate);

  hangar.rotation.y += 0.0005;

  renderer.render(scene, camera);
};

animate();
