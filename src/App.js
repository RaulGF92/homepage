import './App.scss';
import * as modules from './components/Modules';

class App {

    constructor() {
        console.log("[App] Se ha iniciado la App");
        this.initComponents();
        this.initComponents = [];
    }

    initComponents() {
        console.debug("[App - initComponents] Comienza el inicializado de los componentes");
        var components = Object.keys(modules);
        components.forEach((key) => this.handleComponent(key, modules[key]));
    }

    handleComponent(componentName, component) {
        try {
            this.initComponents = new component();
            console.info("[App - initComponent] El Componente" + componentName + " ha sido inicializado con exito");
        } catch (error) {
            console.error("[App - initComponent] Ha habido un fallo al iniciar un componente", error);
        }
    }
}

let app = new App();

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);