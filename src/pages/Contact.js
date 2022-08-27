import React from "react";
import {
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Form,
  Button,
} from "react-bootstrap";

const Contact = () => {
  const handleSubmit = (event) => {};
  return (
    <div className="contact">
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <FormLabel>Name</FormLabel>
                <FormControl
                  required
                  type="test"
                  placeholder="Name"
                ></FormControl>
              </FormGroup>
              <FormGroup className="mb-3" controlId="validation">
                <FormLabel>Email</FormLabel>
                <FormControl
                  required
                  type="test"
                  placeholder="Email"
                ></FormControl>
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel>Message</FormLabel>
                <FormControl
                  required
                  as="textarea"
                  type="test"
                  placeholder="Message"
                ></FormControl>
              </FormGroup>
              <Button type="submit">Submit Form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              I'm an experience designer by trade and an aspiring software
              engineer working on honing my skills. If you're looking for
              world-class problem-solving skills, immersive experiences,
              location-based endeavors, treasure hunts, scavenger hunts, or
              anything of that nature, let's chat!
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
