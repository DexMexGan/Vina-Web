// Import the rest of the images
import dessert1 from "./assets/PN3_1205.jpg";
import dessert2 from "./assets/PN3_1275.jpg";
import dessert3 from "./assets/PN3_1291.jpg";
import dessert4 from "./assets/PN3_1323.jpg";

function Menu() {
  return (
    <section className="gallery">
      <img src={dessert1} alt="Dessert 1" />
      <img src={dessert2} alt="Dessert 2" />
      <img src={dessert3} alt="Dessert 3" />
      <img src={dessert4} alt="Dessert 4" />
    </section>
  );
}

export default Menu;
