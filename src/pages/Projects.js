import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import rerun from "../Images/rerun.png";
import ecomm from "../Images/ecomm.png";
import noteTaker from "../Images/noteTaker.png";
import teamProfiler from "../Images/teamProfiler.png";
import smallChange from "../Images/smallChange.png";
import quiz from "../Images/quiz.png";

const rerunGH = "https://github.com/Ashley1Thompson/rerun-game";
const rerunDeploy = "https://rerun-game.herokuapp.com/";
const ecommGH = "https://github.com/Okapikid/E-Commerce-Back-End";
const ecommDeploy =
  "https://drive.google.com/file/d/1bcHn0DzV7U1-c3TXyO7IVOsS0rnYB6rS/view";
const noteTakerGH = "https://github.com/Okapikid/Note-Taker";
const noteTakerDeploy = "https://morning-sierra-39247.herokuapp.com/notes";
const teamProfilerGH = "https://github.com/Okapikid/Team-Profile-Generator";
const teamProfilerDeploy =
  "https://drive.google.com/file/d/1FUdWPiUXQwN0eLFfnmzg2c198XwJf2Wh/view?usp=sharing";
const accessibleTimesGH = "https://github.com/Chromodyne/the_accessible_times";
const accessibleTimesDeploy =
  "https://chromodyne.github.io/the_accessible_times/";
const quizGH = "https://github.com/Okapikid/Coding-Quiz/";
const quizDeploy = "https://okapikid.github.io/Coding-Quiz/";
const smallChangeGH = "https://github.com/Ashley1Thompson/small-change";
const smallChangeDeploy = "";

const Projects = () => {
  const ProjectCards = [
    {
      id: 1,
      name: "RERUN: A text-based adventure",
      image: rerun,
      gitHub: rerunGH,
      deploy: rerunDeploy,
    },
    {
      id: 2,
      name: "E-Commerce Back End",
      image: ecomm,
      gitHub: ecommGH,
      deploy: ecommDeploy,
    },
    {
      id: 3,
      name: "Note Taker",
      image: noteTaker,
      gitHub: noteTakerGH,
      deploy: noteTakerDeploy,
    },
    {
      id: 4,
      name: "Team Profiler",
      image: teamProfiler,
      gitHub: teamProfilerGH,
      deploy: teamProfilerDeploy,
    },
    {
      id: 5,
      name: "Coding Skills Quiz",
      image: quiz,
      gitHub: quizGH,
      deploy: quizDeploy,
    },
    {
      id: 6,
      name: "Small Change",
      image: smallChange,
      gitHub: smallChangeGH,
      deploy: accessibleTimesDeploy,
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
                    <Card.Link href={item.deploy} target="_blank">
                      Deployed Application
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
