import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const baseUrl = "http://localhost:3050//login";

class Login extends Component {
  state = {
    form: {
      User: "",
      clave: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.UseName]: e.target.value,
      },
    });
  };

  iniciarseccion = async () => {
    await await axios.get(baseUrl, {
      params: { User: this.state.form.User, clave: this.state.form.clave },
    });
  };

  render() {
    return (
      <div>
        <h1> Bienvenido al inicio de seccion </h1>{" "}
        <form action="login" method="post">
          <label> UseName </label>{" "}
          <input
            type="text"
            className="Username"
            Name="User"
            onChange={this.handleChange}
          />{" "}
          <label> Password </label>{" "}
          <input
            type="password"
            className="Username"
            Name="clave"
            onChange={this.handleChange}
          />
          <h1> </h1>{" "}
          <input
            type="submit"
            className="btn- btn-success"
            onClick={() => this.iniciarseccion()}
            value="Entrar"
          />
        </form>{" "}
      </div>
    );
  }
}

export default Login;
