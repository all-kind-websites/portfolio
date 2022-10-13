import { str } from "../misc";
import {
  cssTutorials,
  htmlTutorials,
  javascript,
  react,
  sassTutorials,
  tailwind,
  typescript,
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
    case str.html:
      tutorials = [...htmlTutorials];
      name = "HTML";
      src = require("../assets/techs/html.png");
      color = "orange";
      shadow = "shadow-orange-800";
      text = "text-orange-400";
      break;
    case str.css:
      tutorials = [...cssTutorials];
      name = "CSS";
      src = require("../assets/techs/css.png");
      color = "blue";
      shadow = "shadow-blue-800";
      text = "text-blue-400";
      break;
    case str.sass:
      tutorials = [...sassTutorials];
      name = "Sass";
      src = require("../assets/techs/sass.png");
      color = "pink";
      shadow = "shadow-pink-800";
      text = "text-pink-400";
      break;
    case str.tailwind:
      tutorials = [...tailwind];
      name = "CSS";
      src = require("../assets/techs/tailwind.png");
      color = "blue";
      shadow = "shadow-cyan-400";
      text = "text-cyan-400";
      break;
    case str.javascript:
      tutorials = [...javascript];
      name = "JavaScript";
      src = require("../assets/techs/javascript.png");
      color = "yellow";
      shadow = "shadow-yellow-300";
      text = "text-yellow-300";
      break;
    case str.typescript:
      tutorials = [...typescript];
      name = "JavaScript";
      src = require("../assets/techs/typescript.png");
      color = "blue";
      shadow = "shadow-blue-400";
      text = "text-blue-400";
      break;
    case str.react:
      tutorials = [...react];
      name = "React (N)";
      src = require("../assets/techs/react.png");
      color = "blue";
      shadow = "shadow-cyan-600";
      text = "text-cyan-600";
      break;
    default:
      break;
  }
  return { name, tutorials, src, color, shadow, text };
};

export default getTutorialData;
