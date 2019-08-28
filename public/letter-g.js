
import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      font-family: monospace;

    }
  </style>
  <span class="letter">
    G
  </span>
`;

class LetterG extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-g", LetterG);
