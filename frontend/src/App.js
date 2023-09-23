import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"



function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">
      <Navbar isDesktop={isDesktop} setToggleHamburgerMenu={setToggleHamburgerMenu} />
      <AnimatePresence >
        {toggleHamburgerMenu && (
          <motion.div
            className="hamburger-menu-wrapper"
            initial={{ x: 200, opacity: 0 }}
            transition={{ ease: "linear", duration: 0.1 }}
            animate={{ x: 0, opacity: 1, bounce: 0 }}
            exit={{ x: 300, opacity: 0 }}
          >
            <HamburgerMenu setToggleHamburgerMenu={setToggleHamburgerMenu} />
          </motion.div>
        )}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home isDesktop={isDesktop} />} />
      </Routes>
    </div>
  );
}

export default App;
