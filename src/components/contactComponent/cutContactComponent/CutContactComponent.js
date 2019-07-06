import Component from '../../../Component';
import './CutContactComponent.scss';

export default class CutContactComponent extends Component {

    constructor() {
        super(CutContactComponent,".cut-contact-component");
    }

    static copyToClipBoard(elementToCopy) {
        return new Promise((resolve,reject) => {
            const el = document.createElement('textarea');
            el.value = elementToCopy.innerText;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

            setTimeout(() => {
                resolve();
            }, 2000);  
        });
    }

    onMouseDown(_this, event) {
        _this.classList.add("click");
    }

    onMouseUp(_this,event) {
        _this.classList.add("blink");
        CutContactComponent.copyToClipBoard(_this.querySelector(".text-copy"))
        .then(() => {
            _this.classList.remove("click");
            _this.classList.remove("blink");
        });
    }
}