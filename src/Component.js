export default class Component {

    /**
     * Get a Element or Elements across the QuerySelector.
     * 
     * For all the elements initialize the events
     * 
     * Bind a variable element on child
     * 
     * ------------------------------------------------
     * 
     * Consigue un elemento o elementos a traves del QuerySelector.
     * Para todos los elementos inicializa los eventos, Se asocia una variable 
     * element on childs.
     * 
     * @param {Class} childContext
     * @param {String} querySelector 
     */
    constructor(childContext, querySelector) {
        this.element = document.querySelector(querySelector);

        if (this.element == null || this.element == undefined) {
            console.info("El QuerySelector del componente es vacio, por favor reviselo");
        }

        var eventMap = this.loadChildContext(childContext);
        console.debug(eventMap, typeof (this.element));

        if (typeof (this.element) == "array") {
            console.debug("El elemento es un array de elementos");
            this.element.forEach(_element => this.linkEvents(_element, eventMap));
        } else if (typeof (this.element) == "object") {
            console.debug("El elemento es un objecto");
            this.linkEvents(this.element, eventMap);
        }
    }

    /**
     * Dado un contexto de una clase hija devuelve un mapeado de todas las funciones 
     * que cumplan un regex de los eventos de HTML5.
     * 
     *  La función debe empezar con on y seguir con el evento en mayusculas
     * 
     *  ejem onClick, onBlur
     * 
     * @param {Class} childContext 
     * @returns {Object} eventMap
     */
    loadChildContext(childContext) {
        var response = [];
        var childPrototype = childContext.prototype;
        var eventsKey = Object.getOwnPropertyNames(childPrototype).filter((key) => /^(on)([A-Z])\w+/g.test(key));

        eventsKey.forEach(key => {
            response[key] = childPrototype[key];
        });

        return response;
    }

    /**
     * Dado un elemento HTMLElement y un diccionario con los eventos HTML del componente recorre, 
     * los introduce en su elemento Html.
     * 
     * @param {HTMLElement} element 
     * @param {Map<String,Function>} eventMap 
     */
    linkEvents(element, eventMap) {
        Object
            .keys(eventMap)
            .forEach((key) => {
                var s = new String(key);
                var eventLegacy = s.toLowerCase();
                element[eventLegacy] = eventMap[key];
            });
    }

}