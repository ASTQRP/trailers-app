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
  Row,
} from "reactstrap";
export default function MainContainer(props) {
  const items = props.trailers.map((item) => {
    return (
      <Container key={item.id}>
        <Row>
          <Col
            xs={{ size: "flex", push: 2, pull: 2, offset: 2 }}
            sm={{ size: "flex", push: 2, pull: 2, offset: 2 }}
            md={{ size: "flex", push: 2, pull: 2, offset: 2 }}
          >
            <Card>
              <CardImg top width="100%" src={item.previewURL} />
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
      </Container>
    );
  });
  return (
    <Container>
      <div className="trailers-container">{items}</div>
    </Container>
  );
}
