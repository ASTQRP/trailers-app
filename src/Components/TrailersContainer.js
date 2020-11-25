import React from "react";
import {
  Card,
  Button,
  Container
} from "react-bootstrap";
export default function MainContainer(props) {
  const items = props.trailers.map((item) => {
    return (
      <div key={item.id}>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {item.previewURL}/>
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
    {item.description}
    </Card.Text>
    <Button variant="primary" 
    onClick={() => {
      console.log(item.url);
    }}>
      Go somewhere</Button>
  </Card.Body>
</Card>
</div>
    );
  });
  return (
    <Container>
      <div className="trailers-container">{items}</div>
    </Container>
  );
}
