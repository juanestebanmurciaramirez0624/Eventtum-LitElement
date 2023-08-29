import { LitElement, html } from "lit-element";

class footerEventtum extends LitElement {
    createRenderRoot() {
        return this;
}

    render() {
        return html`   
        <style>
            @import "src/css/footerEventtum.css";
      </style>
        <footer class="bg-black d-flex justify-content-center align-items-center footer">
    <img src="src/img/footerLogo.png">
  </footer>
        `;
    }
};

customElements.define('footer-eventtum', footerEventtum);

