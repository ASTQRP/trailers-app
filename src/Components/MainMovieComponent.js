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
      <MDBCarouselItem key={item.id} itemId={item.id}>
        <MDBView>
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <MDBMask overlay="black-light" />
        </MDBView>
        <MDBCarouselCaption>
          <h3 className="h3-responsive">{item.altText}</h3>
          <p>{item.caption}</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    );
  });
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 w-100"
      >
        <MDBCarouselInner>{cItems}</MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
