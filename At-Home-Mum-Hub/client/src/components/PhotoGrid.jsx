import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/motivation.jpg";
import eight from "../assets/plants.jpg";

function PhotoGrid() {
  return (
    <div className="grid-cont">
      <img src={one} alt="" className="grid-image" />
      <img src={two} alt="" className="grid-image" />
      <img src={three} alt="" className="grid-image" />
      <img src={four} alt="" className="grid-image" />
      <img src={five} alt="" className="grid-image" />
      <img src={six} alt="" className="grid-image" />
      <img src={seven} alt="" className="grid-image" />
      <img src={eight} alt="" className="grid-image" />
    </div>
  );
}

export default PhotoGrid;
