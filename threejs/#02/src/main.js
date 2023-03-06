import * as THREE from "three";

/*
[동적 캔버스 설정]
const renderer = new THREE.WebGLRenderer();
// 사이즈 설정
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer가 가진 dom 요소 (canvas)
// console.log(renderer.domElement);
/*
<canvas data-engine="three.js r150" width="603" height="1329" style="display: block; width: 603px; height: 1329px;"></canvas>
innerWidth, innerHeight 크기로 잡혀진 것을 확인할 수 있다.
*/
/*
document.body.appendChild(renderer.domElement);
*/

const canvas = document.querySelector("#three-canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, // 시야각 (fov)
  window.innerWidth / window.innerHeight, // aspect
  0.1, // near
  1000 // far
);
// 위치 설정을 하지 않으면 기본값은 x:0, y:0, z: 0
// 그래서 약간 뒤로 빼주어야 한다. 물체를 0,0,0 에 놓았을 때 보이지 않기 때문에
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 1;
// threejs에서는 거리가 절대적인 px 단위가 아니다. 우리가 만드는 공간에 따라 다르다.
// meter 라고 생각해주면 됨.
scene.add(camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  //   color: 0xff0000,
  //   color: #ff0000,
  color: "red", // css 속성 적용가능
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

renderer.render(scene, camera);
