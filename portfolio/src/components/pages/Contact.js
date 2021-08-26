import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Contact() {
  return (
    <div>
      <h4>Contact me</h4>
<Form>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
    <Form.Label column sm={1}>
      Name
    </Form.Label>
    <Col sm={7}>
      <Form.Control type="text" placeholder="Name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={1}>
      Email
    </Form.Label>
    <Col sm={7}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalMessage">
    <Form.Label column sm={1}>
      Message
    </Form.Label>
    <Col sm={7}>
      <Form.Control type="textarea" placeholder="Message" />
    </Col>
  </Form.Group>
  

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 1 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
    </div>
  );
}
