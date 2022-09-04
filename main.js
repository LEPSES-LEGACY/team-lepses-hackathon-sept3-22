// import "./style.css";
// import * as THREE from "three";
// import * as dat from "dat.gui";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// // import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

// // Scebe
// let stars, star, starGeo;
// const scene = new THREE.Scene();

// // Sizes
// const sizes = {
//    width: window.innerWidth,
//    height: window.innerHeight,
// };

// // Resize Listener
// window.addEventListener("resize", () => {
//    // update sizes
//    sizes.width = window.innerWidth;
//    sizes.height = window.innerHeight;

//    // update camera
//    camera.aspect = sizes.width / sizes.height;
//    camera.updateProjectionMatrix();

//    // update renderer
//    renderer.setSize(sizes.width, sizes.height);
//    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// // Camera
// const camera = new THREE.PerspectiveCamera(
//    60,
//    sizes.width / sizes.height,
//    0.1,
//    1000
// );

// // Renderer
// const renderer = new THREE.WebGL1Renderer({
//    canvas: document.querySelector("#bg"),
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);

// renderer.render(scene, camera);

// // Lights
// const pointLight = new THREE.PointLight(0xffffff);
// const ambientLight = new THREE.AmbientLight(0xffffff);

// pointLight.position.set(5, 5, 5);

// scene.add(pointLight, ambientLight);

// // control object
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.autoRotate = true;
// controls.autoRotateSpeed = 1;
// controls.enableZoom = true;
// controls.keyPanSpeed = true;
// controls.keys = {
//    LEFT: "ArrowLeft", //left arrow
//    UP: "ArrowUp", // up arrow
//    RIGHT: "ArrowRight", // right arrow
//    BOTTOM: "ArrowDown", // down arrow
// };
// // MOVE CAMERA

// function moveCamera() {
//    const top = document.body.getBoundingClientRect().top;

//    camera.position.z = top * -0.01;
//    camera.position.x = top * -0.0002;
//    camera.rotation.y = top * -0.0002;
// }

// document.body.onscroll = moveCamera;
// moveCamera();

// // Create stars

// function addStar() {
//    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//    const star = new THREE.Mesh(geometry, material);

//    const [x, y, z] = Array(3)
//       .fill()
//       .map(() => THREE.MathUtils.randFloatSpread(100));

//    star.position.set(x, y, z);
//    star.velocity = 0;
//    star.acceleration = 0.02;
//    scene.add(star);
// }

// Array(200).fill().forEach(addStar);

// // Animate
// function animate() {
//    requestAnimationFrame(animate);

//    controls.update();

//    renderer.render(scene, camera);
// }

// animate();
