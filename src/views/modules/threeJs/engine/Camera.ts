import * as THREE from 'three';

/**
 * 相机
 */
export default class Camera extends THREE.PerspectiveCamera {
    constructor(fov?: number, aspect?: number, near?: number, far?: number) {
        super(fov, aspect, near, far);

        // 设置相机位置
        this.position.set(5, 5, 5);
        // 设置相机正反
        this.up = new THREE.Vector3(0, 1, 0);
    }
}
