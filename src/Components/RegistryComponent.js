import React, { Component } from "react";

class Registry extends Component {
  render() {
    return (
      <div className="container w-50 mt-5 shadow-none p-3 mb-5 bg-light rounded">
        <h1 className="text-center"> Bienvenido Registrate </h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Usuario</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresa el nombre de usuario"
            />
            <small id="emailHelp" className="form-text text-muted">
            Nunca compartiremos su nombre de usuario con nadie más.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
    
          <button 
          className=" btn btn-primary btn-block">
            Registrar
          </button>
        </form>
      </div>
    );
  }
}

export default Registry;
