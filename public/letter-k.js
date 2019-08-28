import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      font-family: monospace;
    }

    .embed-responsive {
      position: relative;
      width: 100%;
    }

    .embed-responsive::before {
      display: block;
      content: "";
    }

    .embed-responsive .embed-responsive-item,
    .embed-responsive iframe,
    .embed-responsive embed,
    .embed-responsive object,
    .embed-responsive video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

    .embed-responsive-21by9::before {
      padding-top: 42.857143%;
    }

    .embed-responsive-16by9::before {
      padding-top: 56.25%;
    }

    .embed-responsive-4by3::before {
      padding-top: 75%;
    }

    .embed-responsive-1by1::before {
      padding-top: 100%;
    }
  </style>
  <!-- <div class="embed-responsive embed-responsive-4by3"> -->
  <!-- <iframe class="embed-responsive-item" src="https://giphy.com/embed/26gseXv4fdNHnMCFG" width="480" height="320" frameBorder="0"  allowFullScreen></iframe> -->
  <!-- </div> -->
  <div class="letter">
    K
  </div>
`;

class LetterK extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-k", LetterK);
