import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Accollades from "./pages/Accolades";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./Components/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Container>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accollades" element={<Accollades />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;
