import * as THREE from 'three';
import * as Controls from 'three/examples/jsm/controls/OrbitControls';
/**
 * 轨道控制器
 */
export default class OrbitControls extends Controls.OrbitControls {
    constructor(object: THREE.Camera, domElement?: HTMLElement) {
        super(object, domElement);

        // this.mouseButtons = {
        //     LEFT: null as unknown as THREE.MOUSE,
        //     MIDDLE: THREE.MOUSE.DOLLY,
        //     RIGHT: THREE.MOUSE.ROTATE,
        // };
    }
}
