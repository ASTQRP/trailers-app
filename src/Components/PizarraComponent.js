import React from "react";
import NavbarComponent from "./NavbarComponent";
import MainMovie from "./MainMovieComponent";
import MainContainer from "./TrailersContainer";

export default function PizarraComponent(props) {
  return (
    <div>
      <NavbarComponent />
      <MainMovie />
      <MainContainer />
    </div>
  );
}
