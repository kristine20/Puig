import dynamic from "next/dynamic";
import image1 from "../../assets/images/videoTraining/image1-full.png";
import image2 from "../../assets/images/videoTraining/image2-full.png";
import image3 from "../../assets/images/videoTraining/image3-full.png";
import image4 from "../../assets/images/videoTraining/image4-full.png";

import nina1 from "../../assets/images/videoTraining/nina1-full.png";
import nina2 from "../../assets/images/videoTraining/nina2-full.png";
import nina3 from "../../assets/images/videoTraining/nina3-full.png";

import playicon from "../../assets/images/videoTraining/playicon.svg";
import VideoTraining from "../page";

// Define multiple brand data sets
const brandData = {
  "carolina-herrera": [
    {
      src: image1,
      title: "Very Good Girl Glam",
      videoUrl: "https://www.youtube.com/embed/SqI5bIDF3UA?autoplay=1",
      playIcon: playicon,
    },
    {
      src: image2,
      title: "Bad boy Cobalt",
      videoUrl: "https://www.youtube.com/embed/4QrEocTz69Y?autoplay=1",
      playIcon: playicon,
    },
    {
      src: image3,
      title: "Very Good Girl & Bad Boy Le Parfum",
      videoUrl: "https://www.youtube.com/embed/1v4ITdghGGQ?autoplay=1",
      playIcon: playicon,
    },
    {
      src: image4,
      title: "Gud Girl Supreme",
      videoUrl: "https://www.youtube.com/embed/y4pMsroDb1k?autoplay=1",
      playIcon: playicon,
    },
  ],
  "nina-ricci": [
    {
      src: nina1,
      title: "Nina Ricci — Nina Fleur",
      videoUrl: "https://www.youtube.com/embed/p20cW2Y42aA?autoplay=1",
      playIcon: playicon,
    },
    {
      src: nina2,
      title: "Nina Ricci – Nina Extra Rouge",
      videoUrl: "https://www.youtube.com/embed/hT75-ckGm4w?autoplay=1",
      playIcon: playicon,
    },
    {
      src: nina3,
      title: "Nina Ricci — Nina Rose",
      videoUrl: "https://www.youtube.com/embed/IgdhX1IfSX0?autoplay=1",
      playIcon: playicon,
    },
  ],
};

export default function Page({ params }) {
  const videos = brandData[params.training] || [];
  console.log(params);
  return <VideoTraining videos={videos} />;
}

