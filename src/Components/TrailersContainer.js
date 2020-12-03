import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
} from "mdbreact";

export default function TrailersContainer(props) {
  console.log(props.trailerArray);
  const cards = props.trailerArray.map((trailer) => {
    return (
      <MDBCol className="pt-5">
        <MDBCard style={{ width: 300, height: 400 }}>
          <MDBCardImage className="img-fluid" src={trailer.thumbnail} waves />
          <MDBCardBody>
            <MDBCardTitle>{trailer.titulo}</MDBCardTitle>
            <MDBCardText className="d-flex ">{trailer.descripcion}</MDBCardText>
            <MDBBtn href="#">Ver</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  });

  return (
    <MDBContainer>
      <div className="d-flex pt-5 flex-wrap flex-row justify-content-around ">
        {cards}
      </div>{" "}
    </MDBContainer>
  );
}
