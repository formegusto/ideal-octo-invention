import * as THREE from "three";

export default function example() {
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  // renderer.setClearAlpha(0.5); // 0 ~ 1

  // renderer.setClearColor(0x00ff00);
  renderer.setClearColor("#00ff00");
  // renderer.setClearAlpha(0.5); // 추가로 넣어줘서 색을 조정해줄 수 있다.

  const scene = new THREE.Scene();
  // scene.background = new THREE.Color("blue");
  // scene.background = new THREE.Color("#0000ff");
  scene.background = new THREE.Color(0x0000ff);

  // 원근 카메라(Perspective Camera)
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각 (fov)
    window.innerWidth / window.innerHeight, // aspect
    0.1, // near
    1000 // far
  );
  camera.position.z = 5;
  camera.position.y = 2;
  camera.position.x = 1;
  scene.add(camera);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: "red",
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer.render(scene, camera);

  // 브라우저 사이즈 변경 대응
  function setSize() {
    // 종횡비 수정
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); // orthographic에서 봤죠?
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", setSize);
}
