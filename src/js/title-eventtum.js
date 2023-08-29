import { LitElement, html } from "lit-element";

class titleventtum extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`   
        <div class="d-flex justify-content-center">
        <div class="content-title text-center">
          <h1 class="fw-bold text-dark title">Expertos en eventos</h1>
        </div>
      </div>
        `;
    }
};

customElements.define('title-eventtum', titleventtum);