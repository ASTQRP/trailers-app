import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios").default;

export default function TrailerListComponent() {
  const [Trailers, setTrailers] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3050/").then((res) => {
      setTrailers(res.data);
    });
  });

 

  const trailers = Trailers.map((trailerRow) => {
    return (
      <tr key={trailerRow.id}>
        <th scope="row">{trailerRow.id}</th>
        <td>{trailerRow.titulo}</td>
        <td>{trailerRow.descripcion}</td>

        <td>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <Link
              to={{
                pathname: `/edit/${trailerRow.id}`,
                state: { trailer: `${trailerRow.id}` },
              }}
            >
              <button
                className="btn btn-warning"
                type="button"
                name="options"
                id="option3"
                
              >
                Edit
              </button>
            </Link>

            <button
              className="btn btn-danger"
              type="button"
              name="options"
              id="option3"
              onClick={() => {
                axios.delete(`http://localhost:3050/eliminar/${trailerRow.id}`)
               .catch((res)=> {console.log(res)})
               .then((res)=>{console.log(res)});
            }}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div className="container pt-5  ">
      <table className="table table-borderless table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titulo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>{trailers}</tbody>
      </table>
    </div>
  );
}
