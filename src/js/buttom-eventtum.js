import { LitElement, html } from "lit-element";

class buttomEventtum extends LitElement {
  createRenderRoot() {
    return this;
}
    render() {
        return html`
      <style>
        @import "src/css/buttomEventtum.css";
      </style>
        <div class="d-flex flex-row">
        <div class="d-flex justify-content-center align-items-center flex-lg-column content-white">
          <img src="src/img/EvetumCard.png" alt="" class="imgCard">
          <p class="text-card">Crear, sueña, realizalo</p>
          <button type="button" class="rounded-pill btn btn-warning buttom-conocenos btn-lg">Conocenos</button>
        </div>
        <div class="d-flex justify-content-center align-items-center flex-lg-column content-white content-gray">
          <h1 class="title-gray text-light">YA ERES CLIENTE?</h1>
          <button type="button" class="rounded-pill btn btn-warning buttom-ingresa btn-lg">INGRESA</button>
        </div>
        </div>`

    }
}

customElements.define('buttom-eventtum', buttomEventtum);