import React, { useState, useEffect } from "react";
const axios = require("axios").default;

const CarouselPage = () => {
  const [Thumbnails, setThumbnails] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3050/").then((res) => {
      setThumbnails(res.data);
    });
  });

  const cItems = Thumbnails.map((item) => {
    return (
      <div className="carousel-item active" data-interval="10000">
        <img src={item.thumbnail} class="d-block w-100" alt="..."></img>
      </div>
    );
  });
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">{cItems}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselPage;
