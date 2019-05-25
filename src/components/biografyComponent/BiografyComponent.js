import Component from '../../Component';
import './BiografyComponent.scss';

export default class BiografyComponent extends Component {

    constructor() {
        super(BiografyComponent,"#BiografyComponent");
        let _this = this;

        this.subscribeEvent("biografy-open", (e) => { _this.openView(this, e) });


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
        _this.animateCSS("bounceInRight");
    }

    closeView(_this,event) {
        _this.animateCSS("bounceOutRight",() => {
            _this.elements[0].style.display = "none";
        });
    }
}