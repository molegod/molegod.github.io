let scene, camera, renderer, model;

function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth / 2, 400);
    document.getElementById('model-container').appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Load 3D model
    const loader = new THREE.GLTFLoader();
    loader.load('path/to/your/model.glb', (gltf) => {
        model = gltf.scene;
        scene.add(model);
    }, undefined, (error) => {
        console.error('An error occurred while loading the model:', error);
    });

    // Add OrbitControls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2, 400);
});

// Initialize the scene
init();
