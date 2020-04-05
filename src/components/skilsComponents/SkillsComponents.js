import Component from '../../Component';
import './SkillsComponent.scss';

export default class SkillsComponent extends Component {

    constructor() {
        super(SkillsComponent,"#SkillsComponent");
        let _this = this;
        this.subscribeEvent("skills-open", (e) => { _this.openView(this, e) });


        // Prepare close view event
        let closeViewEvent = (e) => {_this.closeView(_this, e);};
        let buttonClose = this.elements[0].querySelector(".close-window");
        
        if(buttonClose) {
            buttonClose.onclick = closeViewEvent;
        }
        
        _this.elements[0].querySelectorAll(".project-card").forEach((element) => {
            element.onclick = (e) => {
                const url = element.attributes.href.value;
                window.open(url, "_blank")
            }
        });

    }

    /**
     * Esta función va a ser activada desde un evento
     * @param {*} event 
     */
    openView(_this, event) {
        _this.elements[0].style.display = "block";
        _this.animateCSS("bounceInUp");
    }

    closeView(_this,event) {
        _this.animateCSS("bounceOutDown",() => {
            _this.elements[0].style.display = "none";
        });
    }
}