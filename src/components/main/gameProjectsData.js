import starsAheadImg from "../images/Stars_Ahead-Feature_Graphic.png";
import workInProgress from "../images/work-in-progress.png";
import zombieShooterImg from "../images/Zombie_Shooter_Prototype.png";

const gameProjectsData = [
  {
    id: 1,
    label: "Stars Ahead",
    link: (
      <a
        className="projects__label-info"
        href="https://play.google.com/store/apps/details?id=com.ZubuGames.StarsAhead"
        target="_blank"
        rel="noreferrer"
      >
        Google Store Page
      </a>
    ),
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
    label: "Zombie Shooter Prototype",
    link: (
      <a
        className="projects__label-info"
        href="https://play.unity.com/mg/other/zombie-shooter-prototype"
        target="_blank"
        rel="noreferrer"
      >
        WebGL on play.unity
      </a>
    ),
    image: zombieShooterImg,
    genre: "Top Down Shooter",
    date: "Soon",
    engine: "Unity",
    platform: "Android",
    about:
      "This project is under development. My current goal is to make a top down shooter with 3D humanoid animations",
  },
];

export default gameProjectsData;
