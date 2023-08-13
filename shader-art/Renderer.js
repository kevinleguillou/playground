import * as THREE from 'three'

class Renderer{
  constructor(){
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera()
    this.camera.position.z = 1
    const canvas = document.getElementById('canvas')
    this.renderer = new THREE.WebGLRenderer({
      canvas
    })
    this.setDimensions()
    this.registerEventListeners()

    const quadGeometry = new THREE.PlaneGeometry(1, 1)
    const quadMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const quad = new THREE.Mesh(quadGeometry, quadMaterial)
    this.scene.add(quad)
  }

  setDimensions(){
    const screenRatio = window.innerWidth / window.innerHeight
    const horizontalRatio = screenRatio < 1 ? screenRatio : 1
    const verticalRatio = screenRatio > 1 ? 1 / screenRatio : 1
    const ortho = {
      left: -0.5 * horizontalRatio,
      right: 0.5 * horizontalRatio,
      top: 0.5 * verticalRatio,
      bottom: -0.5 * verticalRatio,
    }
    this.camera.left = ortho.left
    this.camera.right = ortho.right
    this.camera.top = ortho.top
    this.camera.bottom = ortho.bottom
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  registerEventListeners(){
    window.addEventListener('resize', () => this.setDimensions())
  }

  render(){
    this.renderer.render(this.scene, this.camera)
    window.requestAnimationFrame(() => this.render())
  }
}

export default Renderer