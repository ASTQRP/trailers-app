import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

const CarouselPage = () => {
  const items = [
    {
      id: 1,
      altText: "mOVIE 1",
      caption: "Slide 1",
      src: "http://i3.ytimg.com/vi/POfrSsYx8Lo/maxresdefault.jpg",
    },
    {
      id: 2,
      altText: "Slide 2",
      caption: "Slide 2",
      src: "http://i3.ytimg.com/vi/POfrSsYx8Lo/maxresdefault.jpg",
    },
    {
      id: 3,
      altText: "Slide 3",
      caption: "Slide 3",
      src: "http://i3.ytimg.com/vi/POfrSsYx8Lo/maxresdefault.jpg",
    },
  ];

  const cItems = items.map((item) => {
    return (
      <div className="carousel-item active" data-interval="10000">
        <img src={item.src} class="d-block w-100" alt="..."></img>
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
