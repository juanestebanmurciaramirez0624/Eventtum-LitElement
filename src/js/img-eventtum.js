import { LitElement, html } from "lit-element";

class imgEventtum extends LitElement {

    createRenderRoot() {
        return this;
}

    render() {
        return html` 
        <style>
          @import "src/css/imgEventtum.css";
        </style>  
        <div class="d-flex flex-row">
        <div class="content-img">
          <img src="src/img/hombre.png" alt="" class="img-man">
        </div>
        <div class="contet-text">
          <div class="content-card">
            <div class="d-flex justify-content-center">
              <h1 class="text-bienvenido">BIENVENIDO A </h1>
              <img src="src/img/Evetum.png" alt="" width="300" height="50">
            </div>
            <div class="text">
              <p class="text-lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor magni quasi, nulla vel
                recusandae unde corporis saepe soluta, similique praesentium maiores nesciunt quo repellat illum atque quam.
                Praesentium, fuga repudiandae?</p>
            </div>
            <div class="icon">
              <i class="fa-brands fa-facebook" style="color: #000000;font-size: 80px;margin-right: 5%;"></i>
              <i class="fa-brands fa-square-instagram" style="color: #000000;font-size: 80px"></i>
            </div>
          </div>
        </div>
      </div>
        `;
    }
};

customElements.define('img-eventtum', imgEventtum);