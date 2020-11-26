import React from "react";
import NavbarComponent from "./NavbarComponent";
import MainMovie from "./MainMovieComponent";
import TrailersContainer from "./TrailersContainer";
export default function PizarraComponent(props) {
  return (
    <div>
      <NavbarComponent />
      <MainMovie />
      <TrailersContainer trailerArray={props.trailer} />
    </div>
  );
}
