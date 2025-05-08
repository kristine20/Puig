import Image from "next/image";
import image1 from "../assets/images/videoTraining/image1.png";
import image2 from "../assets/images/videoTraining/image2.png";
import image3 from "../assets/images/videoTraining/image3.png";
import image4 from "../assets/images/videoTraining/image4.png";

import "./videotraining.css";

const images = [
  { src: image1, alt: "Very Good Girl Glam" },
  { src: image2, alt: "Bad boy Cobalt" },
  { src: image3, alt: "Very Good Girl & Bad Boy Le Parfum" },
  { src: image4, alt: "Gud Girl Supreme" },
];

const VideoTraining = () => {
  return (
    <div>
      <div className="w-fixed">
        <h2 className="vt-title">Carolina Herrera</h2>
      </div>
      <div className="video-training-wrapper">
        {images.map((image, index) => (
          <div key={index} className="video-training-image">
            <Image src={image.src} alt={image.alt} className="video-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTraining;

