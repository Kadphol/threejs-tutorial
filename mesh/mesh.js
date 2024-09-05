import * as THREE from 'three'

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
const scene = new THREE.Scene()

// Create a basic perspective camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 2

// Create a renderer with Antialiasing
const renderer = new THREE.WebGLRenderer({ antialias: true })

// Configure renderer clear color
renderer.setClearColor('#2E2B40')

// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight)

// Append Renderer to DOM
document.body.appendChild(renderer.domElement)

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

const geometry1 = new THREE.BoxGeometry(1, 1, 1)
const material1 = new THREE.MeshBasicMaterial({ color: '#433F81' })
const cube01 = new THREE.Mesh(geometry1, material1)
scene.add(cube01)

const geometry2 = new THREE.BoxGeometry(3, 3, 3)
const material2 = new THREE.MeshBasicMaterial({
  color: '#433F81',
  wireframe: true,
  transparent: true,
})
const cube01_wireframe = new THREE.Mesh(geometry2, material2)
scene.add(cube01_wireframe)

const geometry3 = new THREE.BoxGeometry(1, 1, 1)
const material3 = new THREE.MeshBasicMaterial({ color: '#A49FEF' })
const cube02 = new THREE.Mesh(geometry3, material3)
scene.add(cube02)

const geometry4 = new THREE.BoxGeometry(3, 3, 3)
const material4 = new THREE.MeshBasicMaterial({
  color: '#A49FEF',
  wireframe: true,
  transparent: true,
})
const cube02_wireframe = new THREE.Mesh(geometry4, material4)
scene.add(cube02_wireframe)

const geometry5 = new THREE.BoxGeometry(10, 0.05, 0.5)
const material5 = new THREE.MeshBasicMaterial({ color: '#00FFBC' })
const bar01 = new THREE.Mesh(geometry5, material5)
bar01.position.z = 0.5
scene.add(bar01)

const geometry6 = new THREE.BoxGeometry(10, 0.05, 0.5)
const material6 = new THREE.MeshBasicMaterial({ color: '#ffffff' })
const bar02 = new THREE.Mesh(geometry6, material6)
bar02.position.z = 0.5
scene.add(bar02)

// Render Loop
const render = function () {
  requestAnimationFrame(render)

  cube01.rotation.x += 0.01
  cube01.rotation.y += 0.01

  cube01_wireframe.rotation.x += 0.01
  cube01_wireframe.rotation.y += 0.01

  cube02.rotation.x -= 0.01
  cube02.rotation.y -= 0.01

  cube02_wireframe.rotation.x -= 0.01
  cube02_wireframe.rotation.y -= 0.01

  bar01.rotation.z -= 0.01
  bar02.rotation.z += 0.01

  // Render the scene
  renderer.render(scene, camera)
}

render()
