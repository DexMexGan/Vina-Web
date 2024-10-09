import image1 from "./assets/2.png";

function Home() {
  return (
    <section className="main-banner">
      <img src={image1} alt="Event Logo" />
      <h1>
        Event <span style={{ color: "rgb(255, 182, 193)" }}>✨</span>
      </h1>
    </section>
  );
}

export default Home;
