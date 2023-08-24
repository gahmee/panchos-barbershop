import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BookAppointment from "./pages/BookAppointment";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
