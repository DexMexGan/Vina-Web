import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./info";
import Menu from "./Menu";
import Info from "./info";
import "./styles.css"; // Importing the CSS file
import logo from "./assets/2.png";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header>
          <img src={logo} alt="Logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/info">Info</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/info" element={<Info />} />
        </Routes>

        {/* Footer */}
        <footer>
          <h2>Upcoming Events</h2>
          <p>Coming Soon!</p>
          <p>Est. 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
