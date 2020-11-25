import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Col,
  Row
} from "reactstrap";
export default function MainContainer(props) {
  const items = props.trailers.map((item) => {
    return (
     <div  key={item.id}>
       <Row>
         <Col md={4}>
        <Card>
          <CardImg
            top
            width="100%"
            src={item.previewURL}
          />
          <CardBody>
            <CardTitle tag="h5">{item.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {item.year}
            </CardSubtitle>
            <CardText>{item.description}</CardText>
            <Button
              onClick={() => {
                console.log(item.url);
              }}
            >
              Ver trailer
            </Button>
          </CardBody>
        </Card>
        </Col>
        </Row>
        
      </div>
     
    );
  });
  return (
    <Container>
      <div className="trailers-container">{items}</div>
    </Container>
  );
}
