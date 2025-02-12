import "../components/Subject.css";
import Hygge from "../assets/Hygge.jpg";
import Unschooling from "../assets/Unschooling.jpg";
import Nature from "../assets/Nature.jpg";
import Montessori from "../assets/Montessori.jpg";
import Waldorf from "../assets/Waldorf.jpg";
import ChildLed from "../assets/Child-Led.jpg";
import Slider from "../components/Slider";
function Subject() {
  const images = [Hygge, Unschooling, Nature, Montessori, Waldorf, ChildLed];
  const titles = [
    "Hygge",
    "Unschooling",
    "Nature",
    "Montesorri Inspired",
    "Waldorf Inspired",
    "Child-Led Learning",
  ];

  return (
    <section className="slider-cont">
      <Slider images={images} titles={titles} />
    </section>
  );
}

export default Subject;
