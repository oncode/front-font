import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    div.background {
      background: url("https://media2.giphy.com/media/l0Ex15F9pc1LNeGT6/giphy.gif?cid=790b761112b267aeecf5fefd47f8776a3de357b8085fed4f&rid=giphy.gif");
      background-size: 200%;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
    }
  </style>
  <div class="background">&nbsp;</div>
`;

class LetterF extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-f", LetterF);
