import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BookAppointment from "./pages/BookAppointment";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1250);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1250);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">
      <Navbar isDesktop={isDesktop} />
      <Routes>
        <Route path="/" element={<Home isDesktop={isDesktop} />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
