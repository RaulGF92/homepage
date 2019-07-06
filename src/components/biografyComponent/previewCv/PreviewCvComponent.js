import Component from "../../../Component";
import './PreviewCvComponent.scss';

export default class PreviewCvComponent extends Component {

    constructor() {
        super(PreviewCvComponent, '#previewCVComponent');
        let _this = this;

        this.subscribeEvent("open-preview-cv", (e) => { _this.openView(_this, e) });

        // Prepare close view event
        let closeViewEvent = (e) => { _this.closeView(_this, e); };

        let buttonClose = this.elements[0].querySelector("#previewCVComponent .close-window");

        if (buttonClose) {
            buttonClose.onclick = closeViewEvent;
        }
    }

    openView(_this, event) {
        let element = _this.elements[0];
        element.style.display = "block";

        _this.animateCSS("zoomIn", () => { });
        //debugger
    }

    /**
 * Esta función va ser activada desde un evento onclick
 */
    closeView(_this, event) {
        _this.animateCSS("zoomOut", () => {
            _this.elements[0].style.display = "none";
        });
    }

}