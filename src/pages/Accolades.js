import React from "react";
import { Card } from "react-bootstrap";
import test from "../Images/test.png";
import test2 from "../Images/test2.png";
import { motion } from "framer-motion";

const Accolades = () => {
  const AccolladesCards = [
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
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="individualCards">
        <h2>Accollades</h2>
        <div className="wrapper">
          {AccolladesCards.map((item) => {
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              >
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
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

export default Accolades;
