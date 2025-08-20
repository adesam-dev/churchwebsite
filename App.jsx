import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Sermons from "./pages/Sermons";
import Contacts from "./pages/Contacts";
import Give from "./pages/Give";
import Media from "./pages/Media";
import "./App.css";



 export default function App() {
  
  return(
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sermon" element={<Sermons />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="give" element={<Give />} />
            <Route path="media" element={<Media />} />



          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

