import * as THREE from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
const object = new THREE.Object3D()
scene.add(cube)
scene.add(object)

camera.position.z = 5

function animate() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  object.matrixAutoUpdate = false
  object.updateMatrix()

  renderer.render(scene, camera)
}

if (WebGL.isWebGL2Available()) {
  console.log('WebGL 2 is available')
  // Initiate function or other initializations here
  animate()
} else {
  console.log('WebGL 2 is not available')
  // Handle the case where WebGL 2 is not available
  const warning = WebGL.getWebGL2ErrorMessage()
  document.getElementById('container').appendChild(warning)
}
