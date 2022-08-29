import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import rerun from "../Images/rerun.png";
import ecomm from "../Images/ecomm.png";
import noteTaker from "../Images/noteTaker.png";

const rerunGH = "https://github.com/Ashley1Thompson/rerun-game";
const rerunDeploy = "https://rerun-game.herokuapp.com/";
const ecommGH = "https://github.com/Okapikid/E-Commerce-Back-End";
const ecommDeploy =
  "https://drive.google.com/file/d/1bcHn0DzV7U1-c3TXyO7IVOsS0rnYB6rS/view";
const noteTakerGH = "https://github.com/Okapikid/Note-Taker";
const noteTakerDeploy = "https://morning-sierra-39247.herokuapp.com/notes";

const Projects = () => {
  const ProjectCards = [
    {
      id: 1,
      name: "RERUN: A text-based adventure",
      image: rerun,
      gitHub: rerunGH,
      repo: rerunDeploy,
    },
    {
      id: 2,
      name: "E-Commerce Back End",
      image: ecomm,
      gitHub: ecommGH,
      repo: ecommDeploy,
    },
    {
      id: 3,
      name: "Note Taker",
      image: noteTaker,
      gitHub: noteTakerGH,
      repo: noteTakerDeploy,
    },
    {
      id: 4,
      name: "test2",
      image: rerun,
    },
    {
      id: 5,
      name: "test",
      image: rerun,
    },
    {
      id: 6,
      name: "test2",
      image: rerun,
    },
  ];
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="individualCards">
        <h2>Projects</h2>
        <div className="wrapper">
          {ProjectCards.map((item) => {
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              >
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Link href={item.gitHub} target="_blank">
                      GitHub Repository
                    </Card.Link>
                    <br />
                    <Card.Link href={item.repo} target="_blank">
                      >Deployed Application
                    </Card.Link>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
