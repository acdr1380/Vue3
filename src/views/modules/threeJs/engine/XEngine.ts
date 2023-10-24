import * as THREE from 'three';
import Camera from './Camera';
import OrbitControls from './OrbitControls';
import TransformControls from './TransformControls';

let cycle;

export default class XEngine {
    // 场景挂载DOM
    private el: HTMLElement;

    // 构造器
    private renderer: THREE.WebGLRenderer;

    // 场景
    private scene = new THREE.Scene();

    // 轨道控制器,
    private orbitControls: OrbitControls;

    // 物体控制器
    private transformControl: TransformControls;

    // 射线
    private raycaster: THREE.Raycaster;

    // 当前鼠标位置
    mouse = new THREE.Vector2();

    // 相机
    camera: Camera;

    // 当前选中模型
    activeModel: THREE.Mesh | null;

    /**
     * 构造函数，创建场景
     * @param el 挂载节点
     */
    constructor(el: HTMLElement) {
        this.el = el;
        const { offsetWidth, offsetHeight } = el;
        this.camera = new Camera(75, offsetWidth / offsetHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setClearAlpha(0);

        // 设置场景颜色
        // this.renderer.setClearColor('rgb(255,255,255)');
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.setSize(offsetWidth, offsetHeight, true);
        el.appendChild(this.renderer.domElement);

        // 添加轨道监视
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);

        // 添加物体控制
        this.transformControl = new TransformControls(this.camera, this.renderer.domElement);
        this.scene.add(this.transformControl);

        // 添加射线发射器
        this.raycaster = new THREE.Raycaster();

        this.on();
        this.render();
    }

    /**
     * 注册事件
     */
    private on() {
        window.addEventListener('resize', () => {
            debounce(() => {
                const { offsetWidth, offsetHeight } = this.el;
                // 处理因窗口缩放引起的模型变形
                this.camera.aspect = offsetWidth / offsetHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(offsetWidth, offsetHeight, true);
            }, 500);
        });

        const _this = this;
        let transformState = false;

        this.transformControl.addEventListener('mouseDown', () => {
            transformState = true;
        });
        // 给three的canves添加鼠标事件
        this.renderer.domElement.addEventListener('click', e => {
            if (transformState) {
                transformState = false;
                return false;
            }
            let x = e.offsetX,
                y = e.offsetY,
                width = _this.renderer.domElement.offsetWidth,
                height = _this.renderer.domElement.offsetHeight;

            _this.mouse.x = (x / width) * 2 - 1;
            _this.mouse.y = (-y * 2) / height + 1;
            _this.raycaster?.setFromCamera(_this.mouse, _this.camera);
            // 先删除控制器，再获取物体，获取到之后再把控制器添加到环境中
            _this.scene.remove(_this.transformControl);
            // 射线判断时候禁止递归
            const model = _this.scene.children.filter(c => c.type == 'Mesh');
            const intersect = _this.raycaster?.intersectObjects(model, false);

            _this.scene.add(_this.transformControl);
            // 如果射线获取到的物体大于0，绑定物体控制器
            if (intersect && intersect.length) {
                const object = intersect[0].object as THREE.Mesh;
                _this.activeModel = object;
                _this.transformControl.attach(object);
            } else {
                _this.activeModel = null;
                _this.transformControl.detach();
            }

            _this.selectModelChange(_this.activeModel);
        });
    }

    /**
     * 设置动画，让整个页面动起来
     */
    private render() {
        // 处理因为屏幕大小调整，重复调用init导致循环加快，页面动画不断加快
        if (cycle) {
            cancelAnimationFrame(cycle);
        }
        this.renderer.render(this.scene, this.camera);

        cycle = requestAnimationFrame(this.render.bind(this));
    }

    /**
     * 场景添加物体
     */
    add(...arg: Array<THREE.Object3D>) {
        for (const item of arg) {
            this.scene.add(item);
        }
    }

    /**
     * 选中模型变化
     */
    selectModelChange(model: THREE.Mesh | null) {
        console.log('当前选中模型：', model);
    }

    /**
     * 设置当前选中模型信息
     */
    setModelParams({ width = 0, height = 0, depth = 0 }) {
        if (this.activeModel) {
            this.activeModel.geometry.dispose();
            this.activeModel.geometry = new THREE.BoxGeometry(width, height, depth);
        }
    }
}

let timer;
function debounce(fn, delay) {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    timer = setTimeout(() => {
        fn();
    }, delay);
}
