import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    img {
      width: 80%;
    }
  </style>
  <img src="/letter-e.svg" alt="E" />
`;

class LetterE extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-e", LetterE);
