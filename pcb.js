const scene = new THREE.Scene()
scene.background = new THREE.Color(0x050505)

const camera = new THREE.PerspectiveCamera(45, 900 / 500, 0.1, 1000)
camera.position.set(0, 40, 80)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(900, 500)
document.getElementById("pcb-viewer").appendChild(renderer.domElement)

const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const light1 = new THREE.DirectionalLight(0xffffff, 1)
light1.position.set(50, 50, 50)
scene.add(light1)

const light2 = new THREE.AmbientLight(0x404040, 1.5)
scene.add(light2)

const loader = new THREE.GLTFLoader()
loader.load("pcb.glb", (gltf) => {
  scene.add(gltf.scene)
})

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

animate()
