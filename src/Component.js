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

        if (childContext == null || childContext == undefined) {
            console.info("El ChildContext mostrado por la clase esta vacio, por favor introduzca la clase especifica del componente", querySelector);
            return;
        }

        this.elements = document.querySelectorAll(querySelector);

        if (this.elements == null || this.elements == undefined) {
            console.info("El QuerySelector del componente es vacio, por favor reviselo", querySelector);
            return;
        }

        var eventMap = this.loadChildContext(childContext);
        console.debug(eventMap);
        this.elements.forEach(_element => this.linkEvents(_element, eventMap));

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
                element[eventLegacy] = (e) => { eventMap[key](element, e); }
            });
    }

    /**
     * Envia un evento a otro componente a partir de una key
     * @param {*} eventName 
     * @param {*} attr 
     */
    publishEvent(eventName, attr) {
        var event = new CustomEvent(eventName, attr);
        window.dispatchEvent(event);
    }

    /**
     * Permite subscribirse a un evento a partir de una key y un calback. Cada vez que se emita este evento se llamará a este callback
     * @param {*} eventName 
     * @param {*} callback 
     */
    subscribeEvent(eventName, callback) {
        window.addEventListener(eventName, (event) => {
            try {
                callback(event);
            } catch (error) {
                console.debug("Ha ocurrido un error en la ejecución del evento", error);
            }
        });
    }
} 