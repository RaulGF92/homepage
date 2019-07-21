import Component from "../../../Component";

export default class SocialMediaComponent extends Component {

    constructor() {
        super(SocialMediaComponent, ".social-media-item");
        let _this = this;
    }

    onClick(element, event) {

        let href = {
            linkedin: "http://www.linkedin.com/in/raulgf92",
            medium: "https://medium.com/@raulgf92_61042",
            github: "https://github.com/RaulGF92",
            facebook: "https://www.facebook.com/Raulfgf92"
        };

        let hrefClass = element.classList[1];
        let url = href[hrefClass];
        window.open(url, "_blank");
    }
}