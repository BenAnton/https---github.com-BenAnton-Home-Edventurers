/* eslint-disable react/prop-types */
import "./Hero.css";
import ForestSteps from "../assets/forestSteps.jpg";
import HomeEdLogo from "../assets/HomeEdLogo.png";

function Hero({ openSignup }) {
  return (
    <div className="Hero-cont">
      <img className="Forest-steps" src={ForestSteps} alt="Forest Steps" />
      <img className="HomeEdLogo" src={HomeEdLogo} alt="" />
      <button onClick={openSignup} className="get-started">
        GET STARTED
      </button>
    </div>
  );
}

export default Hero;
