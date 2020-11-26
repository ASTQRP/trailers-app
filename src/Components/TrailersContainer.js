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
            <MDBCardTitle>{trailer.id}</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
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
