import Component from '../../Component';

export default class MenuItemComponent extends Component {

    constructor() {
        super(MenuItemComponent, ".menu-item");
    }

    onClick(element, event) {
        let ref = element.getAttribute("ref");
        console.log("Se ha pulsado el boton", ref);
        let eventKey = ref.toLowerCase() + "-open";
        
        super.publishEvent(eventKey, {});
    }

}