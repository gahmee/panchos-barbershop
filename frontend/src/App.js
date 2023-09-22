import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BookAppointment from "./pages/BookAppointment";
import HamburgerMenu from "./components/HamburgerMenu";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


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
      {toggleHamburgerMenu && <HamburgerMenu setToggleHamburgerMenu={setToggleHamburgerMenu} />}
      <Routes>
        <Route path="/" element={<Home isDesktop={isDesktop} />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
