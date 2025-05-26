import dynamic from "next/dynamic";
import image1 from "../../assets/images/videoTraining/image1-full.png";
import image2 from "../../assets/images/videoTraining/image2-full.png";
import image3 from "../../assets/images/videoTraining/image3-full.png";
import image4 from "../../assets/images/videoTraining/image4-full.png";

import nina1 from "../../assets/images/videoTraining/nina1-full.png";
import nina2 from "../../assets/images/videoTraining/nina2-full.png";
import nina3 from "../../assets/images/videoTraining/nina3-full.png";

import jeanpaulgaultier1 from "../../assets/images/videoTraining/jean-paul-gaultier1-full.png";
import jeanpaulgaultier2 from "../../assets/images/videoTraining/jean-paul-gaultier2-full.png";

import banderas1 from "../../assets/images/videoTraining/banderas1-full.png";

import rabanne1 from "../../assets/images/videoTraining/rabanne1-full.png";
import rabanne2 from "../../assets/images/videoTraining/rabanne2-full.png";
import rabanne3 from "../../assets/images/videoTraining/rabanne3-full.png";
import rabanne4 from "../../assets/images/videoTraining/rabanne4-full.png";
import rabanne5 from "../../assets/images/videoTraining/rabanne5-full.png";
import rabanne6 from "../../assets/images/videoTraining/rabanne6-full.png";
import rabanne7 from "../../assets/images/videoTraining/rabanne7-full.png";

import playicon from "../../assets/images/videoTraining/playicon.svg";
import VideoTraining from "../page";

const videoTrainingData = {
  carolina: {
    trainer: "Carolina Herrera",
    videos: [
      {
        src: image1,
        title: "Very Good Girl Glam",
        videoUrl:
          "https://rutube.ru/play/embed/88844419c5f13099ce4d08cbfce419d1/",
        playIcon: playicon,
      },
      {
        src: image2,
        title: "Bad boy Cobalt",
        videoUrl:
          "https://rutube.ru/play/embed/3c518d737c42543b5cb09ea805f65c2d/",
        playIcon: playicon,
      },
      {
        src: image3,
        title: "Very Good Girl & Bad Boy Le Parfum",
        videoUrl:
          "https://rutube.ru/play/embed/7a77fc94b0fde63e6b32c26dc458eaa5/",
        playIcon: playicon,
      },
      {
        src: image4,
        title: "Gud Girl Supreme",
        videoUrl:
          "https://rutube.ru/play/embed/d14667bec8cf6a1d95dab8d7b68a1176/",
        playIcon: playicon,
      },
    ],
  },
  "nina-ricci": {
    trainer: "Nina Ricci",
    videos: [
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
  },
  "jean-paul-gaultier": {
    trainer: "Jean Paul Gaultier",
    videos: [
      {
        src: jeanpaulgaultier1,
        title: "Jean Paul Gaultier — Scandal Pour Homme",
        videoUrl: "https://www.youtube.com/embed/V-cKx1xnlhA?autoplay=1",
        playIcon: playicon,
      },
      {
        src: jeanpaulgaultier2,
        title: "Jean Paul Gaultier — So Scandal",
        videoUrl: "https://www.youtube.com/embed/qIjlpHfUK3s?autoplay=1",
        playIcon: playicon,
      },
    ],
  },
  banderas: {
    trainer: "Banderas",
    videos: [
      {
        src: banderas1,
        title: "Antonio Banderas — The Icon",
        videoUrl: "https://www.youtube.com/embed/BSvgvSqn1os?autoplay=1",
        playIcon: playicon,
      },
    ],
  },
  "paco-rabanne": {
    trainer: "RABANNE",
    videos: [
      {
        src: rabanne1,
        title: "Paco Rabanne — Olympea Solar",
        videoUrl: "https://www.youtube.com/embed/_-xB5gwYwCU?autoplay=1",
        playIcon: playicon,
      },
      {
        src: rabanne2,
        title: "Paco Rabanne — Invictus Platinum",
        videoUrl: "https://www.youtube.com/embed/iOQ7dUOYFNA?autoplay=1",
        playIcon: playicon,
      },
      {
        src: rabanne3,
        title: "Paco Rabanne — 1 Million Elixir",
        videoUrl: "https://www.youtube.com/embed/EVJyQ0QBR1k?autoplay=1",
        playIcon: playicon,
      },
      {
        src: rabanne4,
        title: "Paco Rabanne – Lady Million Fabulous",
        videoUrl: "https://www.youtube.com/embed/iIJlHulme0A?autoplay=1",
        playIcon: playicon,
      },
      {
        src: rabanne5,
        title: "Paco Rabanne — Phantom",
        videoUrl: "https://www.youtube.com/embed/F6nY949FrH4?autoplay=1",
        playIcon: playicon,
      },
      {
        src: rabanne6,
        title: "Paco Rabanne — Olympea Blossom & Invictus Victory",
        videoUrl: "https://www.youtube.com/embed/gJiw-mhlMrs?autoplay=1",
        playIcon: playicon,
      },
      {
        src: rabanne7,
        title: "Paco Rabanne — 1 Million Parfum",
        videoUrl: "https://www.youtube.com/embed/NvXvnwl1KP0?autoplay=1",
        playIcon: playicon,
      },
    ],
  },
};

export default function Page({ params }) {
  const { training } = params;
  const data = videoTrainingData[training] || { trainer: "", videos: [] };

  return <VideoTraining videos={data.videos} trainer={data.trainer} />;
}
