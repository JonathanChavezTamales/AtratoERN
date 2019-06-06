import React from "react";
import Form from "./Form";
import "./App.css";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://atratofinance.com">
            <img
              src="https://static.wixstatic.com/media/2820ec_f9825a59ebc244b79e9d789d2619114e~mv2.png/v1/fill/w_290,h_68,al_c,q_80,usm_0.66_1.00_0.01/atrato_web_azul_PNG.webp"
              alt="Atrato Logo"
              width="120"
              height="100"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div class="navbar-start">
          <a class="navbar-item">Inicio</a>

          <a class="navbar-item">¿Cómo funciona?</a>
          <a class="navbar-item">Para hospitales</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Para clínicas</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Contacto</a>
              <a class="navbar-item">Precios</a>
              <a class="navbar-item">Casos de éxito</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Reportar algo</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Regístrese</strong>
              </a>
              <a class="button is-light">Inicie sesión</a>
            </div>
          </div>
        </div>
      </nav>
      <Form />
    </div>
  );
}

export default App;
