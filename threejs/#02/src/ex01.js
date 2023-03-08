import * as THREE from "three";

export default function example() {
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

  // 원근 카메라(Perspective Camera)
  // const camera = new THREE.PerspectiveCamera(
  //   75, // 시야각 (fov)
  //   window.innerWidth / window.innerHeight, // aspect
  //   0.1, // near
  //   1000 // far
  // );
  // // 위치 설정을 하지 않으면 기본값은 x:0, y:0, z: 0
  // // 그래서 약간 뒤로 빼주어야 한다. 물체를 0,0,0 에 놓았을 때 보이지 않기 때문에
  // camera.position.z = 5;
  // camera.position.y = 2;
  // camera.position.x = 1;

  // 직교 카메라(Orthographic Camera)

  // threejs에서는 거리가 절대적인 px 단위가 아니다. 우리가 만드는 공간에 따라 다르다.
  // meter 라고 생각해주면 됨.
  const camera = new THREE.OrthographicCamera(
    -(window.innerWidth / window.innerHeight), // left
    window.innerWidth / window.innerHeight, // right
    1, // top
    -1, // bottom
    0.1,
    1000
  );
  camera.position.x = 1;
  camera.position.y = 2;
  camera.position.z = 5;
  // camera.position.z = 10;
  // camera.position.z = 100;

  // 여기까지 설정하면 물체가 아예 안 보이는 것을 확인할 수 있는데
  // 이는 카메라가 너무 멀리 떨어져 있어서 그렇다.
  // 아래와 같이 특정 좌표를 카메라가 바라보도록 설정한다.
  camera.lookAt(0, 0, 0);
  camera.zoom = 0.5; // default 1
  camera.updateProjectionMatrix(); // position 말고 zoom같은 camera 렌더 관련 속성을 바꾸었을 때,
  // 이 함수를 실행시켜줘야 리렌더링이 됨
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
}
