import * as THREE from "three";
// Import module
import * as OrbitControls from "three-orbitcontrols";

// create a scene
const scene = new THREE.Scene();

// create a box
const geometry = new THREE.BoxGeometry(10, 20, 30);
const material = new THREE.MeshLambertMaterial({ color: 0x0000ab });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// add some light
const light = new THREE.PointLight(0xffabba);
light.position.set(10, 10, 35);
light.intensity = 2;
scene.add(light);

// create a camera and set position
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 100;

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
