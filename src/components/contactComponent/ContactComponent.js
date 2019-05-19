import Component from '../../Component';

export default class ContactComponent extends Component {

    constructor() {
        super(ContactComponent,"#ContactComponent");
        this.subscribeEvent("contact-open",this.openView);
    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(event) {
        debugger
    }
}