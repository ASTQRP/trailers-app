import React, { useState } from "react";
const axios = require("axios").default;

export default function AddTrailerComponent() {
  const [titulo, setTitulo] = useState("");
  const [year, setYear] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const registrarTrailer = () => {
    axios
      .post("http://localhost:3050/add", {
        titulo: titulo,
        year: year,
        descripcion: descripcion,
        url: url,
        thumbnail: thumbnail,
      })
      .then((Response) => {
        console.log(Response);
      });
  };

  return (
    <div className="container pt-5">
      <h1>Registrar Nuevo Tralier</h1>
      <form>
        <div className="form-group">
          <label for="titulo">Titulo:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            placeholder="Escriba el titulo..."
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="year">Año: </label>
          <input
            type="number"
            className="form-control"
            id="year"
            placeholder="Escriba el año..."
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="descripcion">Descripcion: </label>
          <textarea
            className="form-control"
            placeholder="Escriba el año..."
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="form-group">
          <label for="url">URL: </label>
          <input
            type="text"
            className="form-control"
            id="url"
            placeholder="Escriba al URL..."
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="thumbnail">Thumbnail: </label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
            placeholder="Escriba al Thumbnail..."
          />
        </div>
        <button
          className="btn btn-primary btn-block"
          onClick={registrarTrailer}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
