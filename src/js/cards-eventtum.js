import { LitElement, html } from "lit-element";

class cardsEventtum extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`  
        <style>
          @import "src/css/cardsEventtum.css";
        </style> 
        <div class="d-flex content-card">
        <div class="card cards rounded-0 ">
          <div class="card-body text-light d-flex flex-md-column align-items-end text-center">
            <h5 class="card-title title-card">Salon Amarillo</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, modi perferendis
              harum corrupti quibusdam atque dolores et perspiciatis ipsam.</p>
            <a href="#" class="btn btn-warning rounded-pill card-button">Más Info</a>
          </div>    
        </div>
        <div class="card cards rounded-0">
          <div class="card-body text-light d-flex flex-md-column align-items-end text-center">
            <h5 class="card-title">Salon Amarillo</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, modi perferendis
              harum corrupti quibusdam atque dolores et perspiciatis ipsam.</p>
            <a href="#" class="btn btn-warning rounded-pill card-button">Más Info</a>
          </div>
        </div>
        <div class="card cards rounded-0">
          <div class="card-body text-light d-flex flex-md-column align-items-end text-center">
            <h5 class="card-title">Salon Amarillo</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, modi perferendis
              harum corrupti quibusdam atque dolores et perspiciatis ipsam.</p>
            <a href="#" class="btn btn-warning rounded-pill card-button">Más Info</a>
          </div>
        </div>
        </div>
        `;
    }
};

customElements.define('cards-eventtum', cardsEventtum);
