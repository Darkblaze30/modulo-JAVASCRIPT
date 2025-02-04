class MiMenu extends HTMLElement{
    constructor(){
        super()
    }

    static get observedAttributes(){
        return('nombre')
    }
    
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'open'})
        const html = `  <strong id='nombre-menu' >Nombre</strong>
                        <button>boton</button>
                        <div id="menu">
                            <div class="item-menu"> Item 1</div>
                            <div class="item-menu"> Item 2</div>
                        </div>`

    const css = `<style>
                    #menu{
                        border:  blue 1px solid;
                        background-color: gray;
                        padding: 10px;
                    }
                
                    .item-menu{
                        background-color: white;
                        margin-bottom: 4px;
                        padding-left: 4px;
                        padding-right: 4px;
                    }
                    #nombre-menu{
                        display: block
                    }
                </style>`
    this.shadowRoot.innerHTML = css + html
    const btn = this.shadowRoot.querySelector('button')
    btn.addEventListener('click', () => {
        const evento = new CustomEvent("evento-custom", {detail: "Evento detonado"})
        this.dispatchEvent(evento)
    })
    }
    attibuteChangedCallback(){
        const nombre = this.shadowRoot.getElementById('nombre-menu')
    }
}

const miMenu = document.querySelector('mi-menu')

customElements.define('mi-menu', MiMenu)
for (const item of miMenu.shadowRoot.querySelectorAll('.item-menu')) {
    item.addEventListener('click', () => {
        alert(item.textContent)
    })
}

miMenu.addEventListener("evento-custom", event => {
    console.log(event.detail)
})
