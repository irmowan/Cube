/**
 * Created by irmo on 16/11/5.
 */

var scene, camera, renderer;
var geometry, material, cube;

var colors = [
  0xffffff,
  0xff0000,
  0xffff00,
  0x0000ff,
  0xffa500,
  0x00ff00
];

function init(dimensions) {
  var d = dimensions || 3;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 500;
  geometry = new THREE.BoxGeometry(200, 200, 200, d, d, d);
  for (var i = 0; i < 6; ++i) {
    for (var j = 0; j < 2 * d * d; ++j) {
      geometry.faces[(2 * d * d) * i + j].color.setHex(colors[i]);
    }
  }
  material = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: THREE.FaceColors, wireframe: false});
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  var geo = new THREE.EdgesGeometry(cube.geometry);
  var mat = new THREE.LineBasicMaterial({color: 0xffffff, linewidth: 2});
  var wireframe = new THREE.LineSegments(geo, mat);
  cube.add(wireframe);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

init();
animate();
