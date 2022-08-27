import React from "react";
import { Card } from "react-bootstrap";
import test from "../Images/test.png";
import test2 from "../Images/test2.png";

const Projects = () => {
  const ProjectCards = [
    {
      id: 1,
      name: "test",
      image: test,
    },
    {
      id: 2,
      name: "test2",
      image: test2,
    },
  ];
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectCards.map((item) => {
          return (
            <div>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
