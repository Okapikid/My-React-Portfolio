import React from "react";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <Row>
        <Col>
          <div class="container">
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
