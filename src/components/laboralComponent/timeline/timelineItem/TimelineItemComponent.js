import Component from '../../../../Component';

export default class TimelineItemComponent extends Component {

    constructor() {
        super(TimelineItemComponent, ".timeline-item");
    }

    onClick(_this, element, event) {
        _this.parentElement.querySelectorAll(".timeline-item.active")
        .forEach(element => {
            element.classList.remove("active") 
            element.style.maxHeight = "150px"   
        });
        _this.classList.add("active")

        const maxHeight = _this.offsetHeight
        const p  = _this.querySelector("p");
        const auxHeight = maxHeight + p.scrollHeight 
        _this.style.maxHeight = `${auxHeight}px` 
    }

    visualizar() {

    }

    desvisualizar() {

    }
}