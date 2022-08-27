import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{ x: -300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Auggie (Mike Augustine)
      </motion.div>
      <motion.div
        className="heading"
        initial={{ x: 300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Experience designer, aspiring software engineer, and all-around hype
        man.
      </motion.div>
    </div>
  );
};

export default Home;
