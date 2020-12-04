import React, { useState } from "react";
const axios = require("axios").default;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:3050/login", {
        user_name: username,
        password: password,
      })
      .then((Response) => {
        console.log(Response);
      });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container w-50 mt-4 shadow-none p-3 mb-5 bg-light text-center rounded">
        <h1> Iniciar sesion </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
