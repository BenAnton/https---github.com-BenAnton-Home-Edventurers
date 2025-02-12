import "./Social.css";
import { InstagramEmbed } from "react-social-media-embed";

function Social() {
  return (
    <>
      <div className="Hero-back">
        <div className="social-flex-cont">
          <div className="instagram-wrapper">
            <InstagramEmbed
              url="https://www.instagram.com/p/DFYUkYKtZAx/"
              width={350}
            />
          </div>

          <div className="instagram-wrapper">
            <InstagramEmbed
              url="https://www.instagram.com/p/DFKyZmGt5ms/?img_index=1"
              width={350}
            />
          </div>

          <div className="instagram-wrapper">
            <InstagramEmbed
              url="https://www.instagram.com/p/DFU9KBENt8z/?img_index=1"
              width={350}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Social;
