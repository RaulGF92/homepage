import Component from "../../../Component";
import './PreviewCvComponent.scss';

export default class PreviewCvComponent extends Component {

    constructor() {
        super(PreviewCvComponent, '#previewCVComponent');
        let _this = this;

        let buttonEl = this.elements[0].querySelector("button");

        var hammertime = new Hammer(buttonEl);
        hammertime.on('swiperight panright swipeleft panleft', function (ev) {
            _this.move(_this, ev);
        });

        this.subscribeEvent("biografy-open", (e) => { _this.resize(this, e) });
    }

    move(_this, e) {
        let element = _this.elements[0];
        var width = window.innerWidth - e.center.x;

        if (width <= window.innerWidth * 0.95 && width >= window.innerWidth * 0.02) {
            element.style.width = width + "px";
        }

    }

    resize(_this, e) {
        _this.elements[0].style.height = document.querySelector("#BiografyComponent").scrollHeight + "px";
    }
}