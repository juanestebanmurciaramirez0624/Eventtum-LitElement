import { LitElement, html } from "lit-element";

class userEventtum extends LitElement {
    createRenderRoot() {
        return this;
}

    render() {
        return html`   
        <div class="d-flex justify-content-around">
        <img src="src/img/qualification.png" width="800">
        <img src="src/img/qualification.png" width="800">
        </div>
        `;
    }
};

customElements.define('user-eventtum', userEventtum);