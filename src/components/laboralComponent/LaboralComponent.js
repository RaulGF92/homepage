import Component from '../../Component';
import './LaboralComponent.scss';

export default class LaboralComponent extends Component {

    constructor() {
        super(LaboralComponent, "#LaboralComponent");
        let _this = this;

        this.subscribeEvent("laboral-open", (e) => { _this.openView(this, e) });


        // Prepare close view event
        let closeViewEvent = (e) => {_this.closeView(_this, e);};
        let buttonClose = this.elements[0].querySelector(".close-window");
        
        if(buttonClose) {
            buttonClose.onclick = closeViewEvent;
        }

    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(_this, event) {
        _this.elements[0].style.display = "block";
        _this.animateCSS("bounceInLeft");
    }

    closeView(_this,event) {
        _this.animateCSS("bounceOutLeft",() => {
            _this.elements[0].style.display = "none";
        });
    }
}