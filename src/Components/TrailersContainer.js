import React, { useEffect, useState } from "react";
const axios = require("axios").default;

export default function TrailersContainer() {
  const [trailers, setTrailers] = useState([
    {
      id: 1,
      titulo: "Valentine",
      year: 2017,
      descripcion:
        "Ciudad de Batavia, una hermosa ciudad que ya no habitaba con seguridad",
      url: "https://www.youtube.com/watch?v=0XVceExEXwk&feature=emb_logo",
      thumbnail: "http://i3.ytimg.com/vi/wi2jiq0VwOY/maxresdefault.jpg",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3050/").then((res) => setTrailers(res.data));
  });

  const cards = trailers.map((trailer) => {
    return (
      <div className="card mt-4" style={{ width: 300, height: 400 }}>
        <img src={trailer.preview_url} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{trailer.id + " " + trailer.titulo}</h5>
          <p className="card-text">
            Some quic3k example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex container pt-5 flex-wrap flex-row justify-content-around ">
      {cards}
    </div>
  );
}
