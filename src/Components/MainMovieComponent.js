import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

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
    src: "http://i3.ytimg.com/vi/ts8nOCgDJUs/maxresdefault.jpg",
  },
  {
    id: 3,
    altText: "Slide 3",
    caption: "Slide 3",
    src: "http://i3.ytimg.com/vi/AyEZ6OJNG4s/maxresdefault.jpg",
  },
];

export default function MainMovie(props) {
  const movies = items.map((item) => {
    return (
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={item.src} alt="Third slide" />

        <Carousel.Caption>
          <h3>{item.altText}</h3>
          <p>{item.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return <Carousel pause={"hover"}>{movies}</Carousel>;
}
