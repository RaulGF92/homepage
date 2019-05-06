import './HelloComponent.scss';
import Component from '../../Component';

export default class HelloComponent extends Component {

    constructor() {
        super(HelloComponent,".HelloComponent");
    }

    onClick(event) {
        console.log("Ha hecho click");
    }
}