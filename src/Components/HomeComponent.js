import React, { Component } from "react";
import CarouselPage from "./MainMovieComponent";
import TrailersContainer from "./TrailersContainer";
import NavbarComponent from "./NavbarComponent";
export default function Home() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <CarouselPage></CarouselPage>
      <TrailersContainer></TrailersContainer>
    </div>
  );
}
