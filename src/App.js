//App.js
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home.js";
import Saved from "./components/Saved.js";
import Navbar from "./components/Navbar.js";
import "./index.css";

const App = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
            {/* Leevesh */}
              <Route path="/" element={<Home />} />
              <Route path="/saved" element={<Saved />} />
          </Routes>
      </Router>
  );
};

export default App;
