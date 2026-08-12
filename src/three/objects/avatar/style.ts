import {
  BoxGeometry,
  Color,
  Group,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
} from "three";

import type { Bone, Material } from "three";

let styleGroup: Group | null = null;
const materials: Material[] = [];

const createMaterial = (color: string, opacity = 1) => {
  const material = new MeshBasicMaterial({
    color: new Color(color),
    transparent: opacity < 1,
    opacity,
    depthWrite: opacity === 1,
  });
  materials.push(material);
  return material;
};

const addBox = (
  parent: Group,
  size: [number, number, number],
  position: [number, number, number],
  material: Material,
  rotation: [number, number, number] = [0, 0, 0],
) => {
  const part = new Mesh(new BoxGeometry(...size), material);
  part.position.set(...position);
  part.rotation.set(...rotation);
  parent.add(part);
};

const setupGlasses = (parent: Group) => {
  const frame = createMaterial("#24221f");
  const glasses = new Group();

  // The avatar looks toward +Z in head-bone space. Keep the lower lens edge open for a half-rim silhouette.
  addBox(glasses, [0.31, 0.035, 0.028], [0.19, 0.055, 0], frame, [0, 0, -0.04]);
  addBox(glasses, [0.31, 0.035, 0.028], [-0.19, 0.055, 0], frame, [0, 0, 0.04]);
  addBox(glasses, [0.09, 0.025, 0.025], [0, 0.035, 0], frame);
  addBox(glasses, [0.025, 0.17, 0.025], [0.35, -0.005, 0], frame, [0, 0, -0.06]);
  addBox(glasses, [0.025, 0.17, 0.025], [-0.35, -0.005, 0], frame, [0, 0, 0.06]);
  glasses.position.set(-0.06, 0.19, 0.49);
  glasses.rotation.x = -0.08;
  parent.add(glasses);
};

const setupHair = (parent: Group) => {
  const hair = createMaterial("#49362c");
  const hairGroup = new Group();
  const cap = new Mesh(new SphereGeometry(0.58, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.52), hair);
  cap.scale.set(1.04, 0.78, 0.94);
  cap.position.set(0, -0.02, -0.03);
  cap.rotation.x = -0.08;
  hairGroup.add(cap);

  hairGroup.position.set(-0.055, 0.64, 0.08);
  parent.add(hairGroup);
};

const init = (headBone: Bone | null) => {
  if (!headBone || styleGroup) return;
  styleGroup = new Group();
  styleGroup.name = "ryder-avatar-style";
  setupGlasses(styleGroup);
  setupHair(styleGroup);
  headBone.add(styleGroup);
};

const destroy = () => {
  styleGroup?.traverse((child) => {
    if (child instanceof Mesh) child.geometry.dispose();
  });
  materials.forEach((material) => material.dispose());
  materials.length = 0;
  styleGroup?.removeFromParent();
  styleGroup = null;
};

export const avatarStyle = { init, destroy };
