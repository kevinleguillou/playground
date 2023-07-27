import * as THREE from 'three'

const scene = new THREE.Scene()
const screenRatio = window.innerWidth / window.innerHeight
const horizontalRatio = screenRatio < 1 ? screenRatio : 1
const verticalRatio = screenRatio > 1 ? 1/screenRatio : 1
const ortho = {
  left: -0.5 * horizontalRatio,
  right: 0.5 * horizontalRatio,
  top: 0.5 * verticalRatio,
  bottom: -0.5 * verticalRatio,
}
const camera = new THREE.OrthographicCamera(ortho.left, ortho.right, ortho.top, ortho.bottom)
camera.position.z = 1
const canvas = document.getElementById('canvas')
const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)

const quadGeometry = new THREE.PlaneGeometry(1, 1)
const quadMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const quad = new THREE.Mesh(quadGeometry, quadMaterial)
scene.add(quad)

renderer.render(scene, camera)