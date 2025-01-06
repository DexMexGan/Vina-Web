import "./styles.css"; // Import  CSS file

import dessert1 from "./assets/PN3_1205.jpg"; // Dessert images
import dessert2 from "./assets/PN3_1275.jpg";
import dessert3 from "./assets/PN3_1291.jpg";
import dessert4 from "./assets/PN3_1323.jpg";
import dessert5 from "./assets/PN3_1311.jpg"; // Add more if needed
function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <img src="./assets/3.png" alt="Mlem Mlem Logo" className="logo"/>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#ordering">Ordering</a>
            </li>
          </ul>
        </nav>
        <button className="contact-button">Contact us</button>
      </header>

      {/* Main Banner */}
      <section className="main-banner">
        <h1>Mlem Mlem </h1>
      </section>
      <section className="second-title">
        <h2> A louisiana-based, asian dessert company</h2>
      </section>
      {/* Dessert Gallery */}
      <section className="gallery">
        <div className="gallery-images">
          <img src={dessert1} alt="Dessert 1" />
          <img src={dessert2} alt="Dessert 2" />
          <img src={dessert3} alt="Dessert 3" />
          <img src={dessert4} alt="Dessert 4" />
          <img src={dessert5} alt="Dessert 5" />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>Find out where we’ll be next!</p>
        <h3>Coming Soon!</h3>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>Contact Us</p>
          <p>Est. 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
