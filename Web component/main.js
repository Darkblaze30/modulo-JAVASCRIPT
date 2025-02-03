class MiResumen extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <div>
            <h1>My componente personalizado</h1>
            <p>Este es un componenete personalizado. Creado con HTMLElements</p>
        </div>
        `
    }
}

customElements.define('mi-resumen', MiResumen)