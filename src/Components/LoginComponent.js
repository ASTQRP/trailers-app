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
      <div className="container w-50 mt-5 shadow-none p-3 mb-5 bg-light text-center rounded">
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
            <svg width="1em" 
                height="1em" 
                viewBox="0 0 16 16" 
                class="bi bi-person-fill" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" 
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
