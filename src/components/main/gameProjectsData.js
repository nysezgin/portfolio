import starsAheadImg from "../images/Stars_Ahead-Feature_Graphic.png";
import workInProgress from "../images/work-in-progress.png";

const gameProjectsData = [
  {
    id: 1,
    label: "Stars Ahead",
    link:
      "https://play.google.com/store/apps/details?id=com.ZubuGames.StarsAhead",
    image: starsAheadImg,
    genre: "Shoot'em Up",
    date: "2021",
    engine: "Unity",
    platform: "Android",
    about:
      "This is my first game project. I learned a lot about the basics and core concepts of Unity Engine while making this game.",
  },
  {
    id: 2,
    label: "New Project",
    link: "",
    image: workInProgress,
    genre: "Top Down Shooter",
    date: "Soon",
    engine: "Unity",
    platform: "Android",
    about:
      "This project is under development. My current goal is to make a top down shooter with 3D humanoid animations",
  },
];

export default gameProjectsData;
