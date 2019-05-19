import Component from '../../Component';

export default class BiografyComponent extends Component {

    constructor() {
        super(BiografyComponent,"#BiografyComponent");
        this.subscribeEvent("biografy-open",this.openView);
    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(event) {
        debugger
    }
}