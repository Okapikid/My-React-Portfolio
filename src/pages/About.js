import React from "react";
import { Col, Row } from "react-bootstrap";
import okapikid from "../Images/okapikid.png";

const About = () => {
  return (
    <div className="contact">
      <Row>
        <Col>
          <div>
            <img src={okapikid} alt="Me, in my natural environment" />
          </div>
        </Col>
        <Col>
          <div className="bio">
            <p>
              Heya, name's Mike Augustine, but it's Auggie (IRL) & Okapikid
              online. I spend my days as a Strategist at Mojo, an incredible
              consultancy in NYC & Cincinnati, OH. If you're a brand in need of
              anything from brand identity to PR to strategy to design—hit us
              up. I'm obsessed with experiential design, gaming in every shape
              and form, and inconsequential bets.
              <br />
              <br />
              If you've got a problem, I want to solve it.
              <br />
              <br />
              If it's not a game, let's make it one.
              <br />
              <br />
              (But also, it's definitely a game.)
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
