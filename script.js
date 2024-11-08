// Basic Three.js Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Set renderer size
renderer.setSize(400, window.innerHeight / window.innerWidth * window.innerHeight);
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Add lighting
const light = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(light);

// Gaussian Splat Example (Replace with actual implementation)
const geometry = new THREE.SphereGeometry(1,32,32);
const material = new THREE.MeshBasicMaterial({ color: 'blue', wireframe: true });
const gaussianSplat = new THREE.Mesh(geometry, material);
scene.add(gaussianSplat);

// Position camera
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the model for some interaction
    gaussianSplat.rotation.x += 0.01;
    gaussianSplat.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();
