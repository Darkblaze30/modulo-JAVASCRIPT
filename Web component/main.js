

class MiResumen extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <div>
            <h1>My componente personalizado</h1>
            <pa>Este es un componenete personalizado. Creado con HTMLElements</pa>
        </div>ad
        `
    }
}


customElements.define('mi-resumen', MiResumen)

class SumaNumeros extends HTMLElement{
    constructor(){
        super();

    }
    static get observedAttributes(){
        return['n1', 'n2']
    }

    connectedCallback(){
        console.log("SumaNumeros esta conectado")
    }

    attributeChangedCallback(elemento, valorAntiguo, valorNuevo){
        console.log(`Elemento ${elemento}, valor antiguo: ${valorAntiguo}, valor nuevo: ${valorNuevo}`)
        if(elemento == "n1") this.n1 = parseInt(valorNuevo);
        else this.n2 = parseInt(valorNuevo)
        this.innerText = `La suma es: ${this.n1 + this.n2}`
    }
}

customElements.define('suma-numeros', SumaNumeros)

document.getElementById('sumar').addEventListener("click", () => {
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const SumaNumer = document.querySelector("suma-numeros");
    SumaNumer.setAttribute("n1", n1)
    SumaNumer.setAttribute("n2", n2)
    console.log(SumaNumer.n1)
})