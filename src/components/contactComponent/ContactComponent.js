import Component from '../../Component';
import './ContactComponent.scss';

export default class ContactComponent extends Component {

    constructor() {
        super(ContactComponent, "#ContactComponent");
        let _this = this;

        this.subscribeEvent("contact-open", (e) => { _this.openView(_this, e) });

        // Prepare close view event
        let closeViewEvent = (e) => { _this.closeView(_this, e); };

        let buttonClose = this.elements[0].querySelector("#ContactComponent .close-window");

        if (buttonClose) {
            buttonClose.onclick = closeViewEvent;
        }

    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(_this, event) {
        _this.elements[0].style.display = "block";
        _this.animateCSS("bounceInDown");
    }

    closeView(_this, event) {
        _this.animateCSS("bounceOutUp", () => {
            _this.elements[0].style.display = "none";
        });
    }
}