import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Container>
  <Row>
    <Col xs={12} md={4}>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer"><Image src="https://via.placeholder.com/300" thumbnail /></a>
    </Col>

    <Col xs={12} md={4}>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer"><Image src="https://via.placeholder.com/300" thumbnail /></a>
    </Col>

    <Col xs={12} md={4}>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer"><Image src="https://via.placeholder.com/300" thumbnail /></a>
    </Col>

    <Col xs={12} md={4}>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer"><Image src="https://via.placeholder.com/300" thumbnail /></a>
    </Col>

    <Col xs={12} md={4}>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer"><Image src="https://via.placeholder.com/300" thumbnail /></a>
    </Col>

    <Col xs={12} md={4}>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer"><Image src="https://via.placeholder.com/300" thumbnail /></a>
    </Col>
  </Row>
</Container>
    </div>
  );
}
