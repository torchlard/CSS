// let tmp1 = document.createElement("template")
// tmp1.innerHTML = `
//   <style>:host {...}</style> <!-- look ma -->
//   <b>I'm in shadow doom</b>
//   <slot></slot>
// `

let tmp1 = document.getElementById("x-foo-template")

class xorg extends HTMLElement {

  constructor() {
    super()
    this.addEventListener('click', e => {
      if (this.disabled) {
        return
      }
      this.toggleDrawer()
    })
    let shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(tmp1.content.cloneNode(true))
  }
  
  get open(){
    return this.hasAttribute('open')
  }
  set open(val){
    if(val){
      this.setAttribute('open','')
    } else {
      this.removeAttribute('open')
    }
    this.toggleDrawer()
  }

  get disabled(){
    return this.hasAttribute('disabled')
  }
  set disabled(val){
    if(val){
      this.setAttribute('disabled','')
    } else {
      this.removeAttribute('disabled')
    }
  }

  static get observedAttributes(){
    return ['disabled', 'open']
  }

  attributeChangedCallback(name, oldVal, newVal){
    if(this.disabled){
      this.setAttribute('tabindex', -1)
      this.setAttribute('aria-disabled','true')
    } else {
      this.setAttribute('tabindex',0)
      this.setAttribute('aria-disabled', 'false')
    }
  }

  

  connectedCallback(){
    this.innerHTML = "<b>I'm an x-foo markup</b>"
  }

  toggleDrawer(){
    console.log('toggle drawer')
  }
  
}

customElements.define('x-org', xorg)
customElements.whenDefined('x-org').then(()=> {
  console.log('xorg defined')
})
let xf = document.getElementById("md1")

// console.log(document.getElementById("md1").disabled())
document.getElementsByTagName("button")[0].onclick = ()=>{
  console.log(xf.id)
  console.log(xf.hidden)
  xf.disabled = 1
}

class FancyButton extends HTMLButtonElement {
  constructor(){
    super()
    this.addEventListener('click', e=> this.drawRipple(e.offsetX, e.offsetY))
  }
  drawRipple(x,y){
    let div = document.createElement('div')
    div.classList.add('ripple')
    this.appendChild(div)
    div.style.top = `${y - div.clientHeight/2}px`
    div.style.left = `${x - div.clientWidth/2}px`
    div.classList.add('run')
    div.addEventListener('transitionend', e => div.remove())
  }
  
}
customElements.define('fancy-button', FancyButton, {extends: 'button'})






