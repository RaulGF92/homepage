import Component from "../../../Component";
import './PreviewCvComponent.scss';

export default class PreviewCvComponent extends Component {

    constructor() {
        super(PreviewCvComponent, '#previewCVComponent');
        let _this = this;
        this.isOpen = false;

        let buttonEl = this.elements[0].querySelector(".button");
        buttonEl.onclick = (e) => {
            if(this.isOpen) {
                _this.elements[0].style.maxWidth = window.innerWidth * 0.01 + "px"
                this.elements[0].querySelector(".cv").style.display = "block";
                this.elements[0].querySelector(".close").style.display = "none";
            } else {
                _this.elements[0].style.maxWidth = window.innerWidth * 0.9 + "px"
                this.elements[0].querySelector(".cv").style.display = "none";
                this.elements[0].querySelector(".close").style.display = "block";
            }
            this.isOpen = !this.isOpen
        }

        this.subscribeEvent("biografy-open", (e) => { _this.resize(this, e) });
    }

    move(_this, e) {
        let element = _this.elements[0];
        const pointer = e.pointers[0]
        var width = window.innerWidth - pointer.clientX;
        debugger
        if (width <= window.innerWidth * 0.95 && width >= window.innerWidth * 0.01) {
            element.style.width = width + "px";
        }

    }

    resize(_this, e) {
        _this.elements[0].style.minHeight = document.querySelector("#BiografyComponent").scrollHeight + "px";
    }
}