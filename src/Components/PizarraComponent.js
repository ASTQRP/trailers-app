import React from "react";
import NavbarComponent from "./NavbarComponent";
import MainMovie from "./MainMovieComponent";
import MainContainer from "./TrailersContainer";
import PaginationBottom from "./PaginationComponent";
export default function PizarraComponent(props) {
  return (
    <div>
      <NavbarComponent />
      <MainMovie />
      <MainContainer trailers={props.trailer} />
      <PaginationBottom />
    </div>
  );
}
