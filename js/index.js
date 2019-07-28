
//Mesh -- holds a geometry and a material
//Geometry -- defines shape of Mesh
//Material -- defines the look of the mesh surface


let container;
let camera;
let renderer;
let scene;
let mesh;

function init(){
  container = document.querySelector( '#scene-container')

  // create a Scene
  scene = new THREE.Scene();

  // Set the background color
  scene.background = new THREE.Color( 'black' );

  // Create a Camera
  const fov = 35; // Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  //near and far define the top and bottom planes of the frustum
  //  -> closer than "near" will be invisible
  //  -> farther than "far" will be invisible
  //fov defines the angle of the viewing frustum (humans have 120 deg)

  //setting the position of the camera a bit back (positive z direction)
  camera.position.set( 0, 0, 10 );


  //create geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2);
  // ^^ creates a cube

  //create material
  const material = new THREE.MeshStandardMaterial({color: 0xff0059});

  //create a mesh container
  mesh = new THREE.Mesh( geometry, material );

  //add mesh to scene
  scene.add( mesh );
  //remove using scene.remove

  //create directional lighting
  const light = new THREE.DirectionalLight( 0xffffff, 5.0 );

  //move light back and up
  light.position.set( 10, 10, 10);

  //add the light
  scene.add(light);


  //create the renderer
  renderer = new THREE.WebGLRenderer

  renderer.setSize( container.clientWidth, container.clientHeight );
  renderer.setPixelRatio( window.devicePixelRatio );

  container.appendChild( renderer.domElement );

}

function animate(){

  //recusively calls the animate() method
  requestAnimationFrame( animate );
  //^^should allow for 60 fps animation

  //rotate
  mesh.rotation.z += 0.01;
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  //render the scene
  renderer.render( scene, camera );
}

init();
animate();
