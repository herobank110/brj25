import { Application, Assets, Container, Sprite } from "pixi.js";

// This example is the based on basic/container, but using OffscreenCanvas.

const canvas = document.createElement("canvas");
canvas.width = 100;
canvas.height = 100;
const canvasTex = new THREE.CanvasTexture(canvas);
let a = false;
// const view = canvas.transferControlToOffscreen();

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({
    canvas,
    background: "#1099bb", //resizeTo: window
    width: 100,
    height: 100,
  });
  globalThis.__PIXI_APP__ = app;
// app.renderer.resize(50, 100);
//   app.resize()
// app.screen.width = 50;
// app.resize()

  // Append the application canvas to the document body
    // document.body.appendChild(canvas);

  const container = new Container();

  app.stage.addChild(container);

  // Load the bunny texture
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");

  // Create a 5x5 grid of bunnies
//   for (let i = 0; i < 25; i++) {
    const bunny = new Sprite(texture);

    bunny.anchor.set(0.5);
    // bunny.x = (i % 5) * 40;
    // bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
//   }

  // Move container to the center
  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;

  // Center bunny sprite in local container coordinates
//   container.pivot.x = container.width / 2;
//   container.pivot.y = container.height / 2;


  // Listen for animate update
  app.ticker.add((time) => {
    // Rotate the container!
    // * use delta to create frame-independent transform *
    container.rotation -= 0.01 * time.deltaTime;
  });
})();

import * as THREE from "three";

const width = window.innerWidth,
  height = window.innerHeight;

// init

const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshBasicMaterial();

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// animation

function animate(time) {
  mesh.rotation.x = time / 20000;
  mesh.rotation.y = time / 10000;

  if (!material.map) {

   material.map = canvasTex;//new THREE.CanvasTexture(canvas);
   console.log(material.map);
    }
  if (material.map)
  material.map.needsUpdate = true;
// console.log(canvasTex

  renderer.render(scene, camera);
}
