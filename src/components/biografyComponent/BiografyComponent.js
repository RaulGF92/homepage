import Component from '../../Component';

export default class BiografyComponent extends Component {

    constructor() {
        super(BiografyComponent,"#BiografyComponent");
        this.subscribeEvent("biografy-open", (e) => { this.openView(this, e) });
    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(_this, event) {
        _this.elements[0].style.display = "flex";
        _this.animateCSS("bounceInRight");
    }
}