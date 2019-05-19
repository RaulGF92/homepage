import Component from '../../Component';

export default class SkillsComponent extends Component {

    constructor() {
        super(SkillsComponent,"#SkillsComponent");
        this.subscribeEvent("skills-open",this.openView);
    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(event) {
        debugger
    }
}