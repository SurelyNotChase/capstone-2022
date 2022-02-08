import * as THREE from 'three';


export const updateScene = () => {


////----- 3D Objects -----////
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000) //FOV, aspect ratio, near plane, far plane

camera.position.z = 10;
camera.position.x = 0;
camera.position.y=0;

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setClearColor('lightgrey'); //background color
renderer.setSize(window.innerWidth,window.innerHeight); //initial sizing

const renderWidth = window.innerWidth/2;
const renderHeight = window.innerHeight/2;

//responsive scene scaling
window.addEventListener('resize', () => { 
    renderer.setSize(renderWidth,renderHeight);
    camera.aspect = renderWidth/renderHeight;
    camera.updateProjectionMatrix();
} )

//light
const light = new THREE.PointLight('white',1,5000)

light.position.set(10,0,25)
scene.add(light)

//mesh
const box = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshLambertMaterial({color:'green'});
const mesh = new THREE.Mesh(box,material);
const mesh2 = new THREE.Mesh(box,material);

scene.add(mesh)
//scene.add(mesh2)

//mount to dom
document.querySelector('body').appendChild(renderer.domElement); 

//render
renderer.render(scene,camera)

///?

}