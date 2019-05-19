import Component from '../../Component';

export default class LaboralComponent extends Component {

    constructor() {
        super(LaboralComponent,"#LaboralComponent");

        this.subscribeEvent("laboral-open",this.openView);
    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(event) {
        debugger
    }
}