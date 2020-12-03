import React, { Component } from "react";
import CarouselPage from "./MainMovieComponent";
import TrailersContainer from "./TrailersContainer";
export default function Home() {
  return (
    <div>
      <CarouselPage></CarouselPage>
      <TrailersContainer></TrailersContainer>
    </div>
  );
}
