import Component from '../../Component';
import './BiografyComponent.scss';

export default class BiografyComponent extends Component {

    constructor() {
        super(BiografyComponent, "#BiografyComponent");
        let _this = this;

        this.subscribeEvent("biografy-open", (e) => { _this.openView(this, e) });

        // Prepare close view event
        let closeViewEvent = (e) => { _this.closeView(_this, e); };
        let buttonClose = this.elements[0].querySelector(".close-window");
        if (buttonClose) {
            buttonClose.onclick = closeViewEvent;
        }

        let openPreviewCV = (e) => { _this.openPreviewCV(_this, e) }
        let buttonPreviewCV = this.elements[0].querySelector("#previewCV");
        if (buttonPreviewCV) {
            buttonPreviewCV.onclick = openPreviewCV;
        }

        let downloadCV = (e) => { _this.downloadCV(_this, e); }
        let buttonDownloadCV = this.elements[0].querySelector("#downloadCV");
        if (buttonDownloadCV) {
            buttonDownloadCV.onclick = downloadCV;
        }
    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(_this, event) {
        _this.elements[0].style.display = "block";
        _this.animateCSS("bounceInRight");
    }

    /**
     * Esta función va ser activada desde un evento onclick
     */
    closeView(_this, event) {
        _this.animateCSS("bounceOutRight", () => {
            _this.elements[0].style.display = "none";
        });
    }

    /**
     * Esta función es activada desde un evento onclick y crea un 
     * llamado a la vista de PreviewCV para que se muestre
     * 
     * @param {*} _this 
     * @param {*} event 
     */
    openPreviewCV(_this, event) {
        super.publishEvent('open-preview-cv', {});
    }

    /**
     * Esta función es activada desde un evento onclick y realiza 
     * una descarga de un archivo al sistema.
     * @param {*} _this 
     * @param {*} event 
     */
    downloadCV(_this, event) {
        const uri = "https://raulgf92.github.io/homepage/assets/Raúl's Resume.pdf";
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
    }
}