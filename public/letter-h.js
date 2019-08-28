import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .background {
      display: block;
      width: 100%;
      background: url("https://media1.giphy.com/media/26gssxI5mUGopNIAg/giphy.gif?cid=790b76117b1d5bde6d0a8e85e7c762202349e01e393d5bed&amp;rid=giphy.gif");
      background-size: 170%;
      background-repeat: no-repeat;
      background-position: center;
    }
  </style>
  <div class="background">&nbsp;</div>
`;

class LetterH extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-h", LetterH);
