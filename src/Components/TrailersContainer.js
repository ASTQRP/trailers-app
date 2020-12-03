import React, { useEffect, useState } from "react";

const axios = require("axios").default;

export default function TrailersContainer() {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3050").then((res) => setTrailers(res.data));
  });

  const cards = trailers.map((trailer) => {
    return (
      <div key={trailer.id} className="div pt-5">
        <div className="card" style={{ width: 300, height: 400 }}>
          <img src={trailer.thumbnail} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="#"
              onClick={() => alert(trailer.url)}
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
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
