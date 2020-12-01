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
      <MDBCol className="p-2">
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>{`ID: ${trailer.id}`}</MDBCardTitle>
            <MDBCardText>{trailer.description}</MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  });

  return (
    <MDBContainer>
      <div className="d-flex pt-5 flex-wrap flex-row justify-content-around">
        {cards}
      </div>{" "}
    </MDBContainer>
  );
}
