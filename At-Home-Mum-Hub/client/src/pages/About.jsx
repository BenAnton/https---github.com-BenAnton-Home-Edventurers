import Pam from "../assets/pamBeach.JPG";
import PhotoGrid from "../components/PhotoGrid";
import "../pages/About.css";

function About() {
  return (
    <div>
      <div className="flex-cont">
        <div className="flex-left">
          <h1 className="heading-1">About Me</h1>
          <h4 className="heading-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            perferendis perspiciatis deleniti accusamus fugiat aliquid
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            perferendis perspiciatis deleniti accusamus fugiat aliquid
            necessitatibus laboriosam optio dolores voluptatibus eum, inventore,
            iure error totam placeat assumenda modi veritatis. Commodi! Dolore
            temporibus illum quasi commodi iure, consectetur vitae, voluptates
            obcaecati sequi
          </p>
        </div>
        <div className="flex-right">
          <img className="pam-img" src={Pam} alt="Pam"></img>
        </div>
      </div>
      <PhotoGrid />
    </div>
  );
}
export default About;
