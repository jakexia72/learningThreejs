
//Mesh -- holds a geometry and a material
//Geometry -- defines shape of Mesh
//Material -- defines the look of the mesh surface

const container = document.querySelector( '#scene-container')

// create a Scene
const scene = new THREE.Scene();

// Set the background color
scene.background = new THREE.Color( 'skyblue' );

// Create a Camera
const fov = 35; // Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

//near and far define the top and bottom planes of the frustum
//  -> closer than "near" will be invisible
//  -> farther than "far" will be invisible
//fov defines the angle of the viewing frustum (humans have 120 deg)

//setting the position of the camera a bit back (positive z direction)
camera.position.set( 0, 0, 10 );
