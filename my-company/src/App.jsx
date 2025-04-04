

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import the necessary routing components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; // Optional navbar for navigation

function App() {
    return (
        <div>
            <h1>Welcome to My React App</h1>
            <p>This is a basic setup.</p>
        </div>
    );
    return (
        <Router>
            <Navbar /> {/* Navigation bar */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Route for Home page */}
                <Route path="/about" element={<About />} /> {/* Route for About page */}
                <Route path="/services" element={<Services />} /> {/* Route for Services page */}
                <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
            </Routes>
        </Router>
    );
}

export default App;
