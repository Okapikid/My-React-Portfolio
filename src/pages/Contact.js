import React from "react";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <Row>
        <Col>
          <div class="container">
            <h1>FormSubmit Demo</h1>
            <form
              target="_blank"
              action="https://formsubmit.co/auggie@okapikid.com"
              method="POST"
            >
              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div class="col">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  placeholder="Your Message"
                  class="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-lg btn-dark btn-block">
                Submit Form
              </button>
            </form>
          </div>
          {/* <div className="contact-form">
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
          </div> */}
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              I'm an experience designer by trade and an aspiring software
              engineer working on honing my skills.
            </p>
            <p>
              If you're looking for world-class problem-solving skills,
              immersive experiences, location-based endeavors, treasure hunts,
              scavenger hunts, or anything of that nature, I would love to chat!
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
