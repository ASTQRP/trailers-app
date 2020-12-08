import React, { useState } from "react";
const axios = require("axios").default;

export default function AddTrailerComponent() {
  const [titulo, setTitulo] = useState("");
  const [year, setYear] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    registrarTrailer();
  };
  const registrarTrailer = () => {
    axios.post("http://localhost:3050/add", {
      titulo: titulo,
      year: year,
      descripcion: descripcion,
      url: url,
      preview_url: thumbnail,
    });
  };

  return (
    <div className="container w-50 mt-4 shadow-none p-3 mb-5 bg-light rounded">
      <h1 className="text-center">Registrar Nuevo Tralier</h1>
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
            placeholder="Escriba la descripcion"
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
        <button className="btn btn-primary btn-block" onClick={handleSubmit}>
          Guardar
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class=" bi bi-cloud-arrow-up"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
