

// Basic Three.js Setup
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0xff0000 );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true} );
// const renderer = new THREE.WebGLRenderer( );


// Set renderer size
renderer.setSize(window.innerWidth/2.5, window.innerWidth/2.5);
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Add lighting
const light = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(light);

const loader = new THREE.GLTFLoader();

// loader.load( 'g3model.gltf', function ( gltf ) {
//     model = gltf.scene
//     model.scale.set(10000, 10000, 10000);
//     const box = new THREE.Box3().setFromObject(model);
//     const center = box.getCenter(new THREE.Vector3());
//     model.position.sub(center);
//     model.traverse((node) => {
//         if (!node.isMesh) return;
//         node.material.wireframe = true;
//       });

//     const group = new THREE.Group();
//     group.add(box)
//     group.add(model)
//     group.rotation.set(90,91,1.1)
    
// 	scene.add( group );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

// Gaussian Splat Example (Replace with actual implementation)
const geometry = new THREE.BoxGeometry(3.5,3.5,3.5, 5, 5, 5);
const material = new THREE.MeshBasicMaterial({ color: '#241f1c', wireframe: true });
const gaussianSplat = new THREE.Mesh(geometry, material);
scene.add(gaussianSplat);

// Position camera
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the model for some interaction
    gaussianSplat.rotation.x += 0.0025;
    gaussianSplat.rotation.y += 0.0025;

    renderer.render(scene, camera);
}
animate();
