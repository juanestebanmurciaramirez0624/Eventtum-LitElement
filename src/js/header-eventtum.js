import { LitElement, html, css } from "lit-element";

class headerEventtum extends LitElement {
    createRenderRoot() {
        return this;
}

    render() {
        return html`   
        <style>
          @import "src/css/headerEventtum.css";
        </style>
        <header>
        <nav class="navbar bg-dark border-bottom border-body bg-black">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="src/img/LogoEventtumHeader.png" alt="Logo" width="100" height="100"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="icon"><img src="src/img/Hamburger.png" alt=""></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                <a class="nav-link text-light" href="#">Features</a>
                <a class="nav-link text-light" href="#">Pricing</a>
              </div>
            </div>
          </div>
        </nav>
      </header>`;
    }
};

customElements.define('header-eventtum', headerEventtum);
