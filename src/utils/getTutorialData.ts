import {
  cssTutorials,
  htmlTutorials,
  sassTutorials,
  tailwind,
} from "../misc/tutorials";

const getTutorialData = (id: string | undefined) => {
  let name = "";
  let tutorials: {
    id: number;
    school: string;
    courseName: string;
    src: string;
    summary: string;
  }[] = [];
  let src = null;
  let color = "blue";
  let shadow = "shadow-blue-800";
  let text = "text-blue-400";

  switch (id) {
    case "html":
      tutorials = [...htmlTutorials];
      name = "HTML";
      src = require("../assets/techs/html.png");
      color = "orange";
      shadow = "shadow-orange-800";
      text = "text-orange-400";
      break;
    case "sass":
      tutorials = [...sassTutorials];
      name = "Sass";
      src = require("../assets/techs/sass.png");
      color = "pink";
      shadow = "shadow-pink-800";
      text = "text-pink-400";
      break;
    case "css":
      tutorials = [...cssTutorials];
      name = "CSS";
      src = require("../assets/techs/css.png");
      color = "blue";
      shadow = "shadow-blue-800";
      text = "text-blue-400";
      break;
    case "tailwind":
      tutorials = [...tailwind];
      name = "CSS";
      src = require("../assets/techs/tailwind.png");
      color = "blue";
      shadow = "shadow-cyan-400";
      text = "text-cyan-400";
      break;
    default:
      break;
  }
  return { name, tutorials, src, color, shadow, text };
};

export default getTutorialData;
