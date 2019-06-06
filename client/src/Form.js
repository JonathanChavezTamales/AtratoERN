import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      monthlyEarnings: 0,
      isMarried: false,
      terms: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if (this.state.terms == false) {
      alert("Acepte los términos");
    } else {
      axios
        .post("http://localhost:4000/users", {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          age: this.state.age,
          monthlyEarnings: this.state.monthlyEarnings,
          isMarried: this.state.isMarried
        })
        .then(function(response) {
          console.log(this.state);
        })
        .catch(function(error) {
          console.log(error);
        });
      alert(
        `DEBUG:\nEn este caso redireccionaría, no sé hacer routing en react, está fácil, pero hice lo que pude.\nREVISE EN BDD: \n${
          this.state.firstName
        }`
      );
    }
  }

  render() {
    return (
      <div className="form-wrap">
        <h1 class="title">Mi solicitud</h1>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input
              value={this.state.firstName}
              class="input"
              type="text"
              name="firstName"
              placeholder=""
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Apellido</label>
          <div class="control">
            <input
              value={this.state.lastName}
              class="input"
              type="text"
              placeholder=""
              name="lastName"
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              value={this.state.email}
              type="email"
              placeholder="atrato@gmail.com"
              name="email"
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Edad</label>
          <div class="control">
            <input
              class="input"
              value={this.state.age}
              type="text"
              name="age"
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Ingreso mensual promedio</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="$ en pesos"
              name="monthlyEarnings"
              value={this.state.monthlyEarnings}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="label">¿Estás casado/a?</label>
            <label class="checkbox">
              <input
                type="checkbox"
                name="isMarried"
                value={this.state.isMarried}
                onChange={this.handleInputChange}
              />
              Sí
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input
                type="checkbox"
                name="terms"
                value={this.state.terms}
                onChange={this.handleInputChange}
              />
              Acepto los términos y condiciones
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
