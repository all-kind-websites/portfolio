import str from "./str";

const html = require("../assets/techs/html.png");
const css = require("../assets/techs/css.png");
const sass = require("../assets/techs/sass.png");
const tailwind = require("../assets/techs/tailwind.png");
const javascript = require("../assets/techs/javascript.png");
const typescript = require("../assets/techs/typescript.png");
const reactImg = require("../assets/techs/react.png");
const react_navigation = require("../assets/techs/react_navigation.png");
const react_router = require("../assets/techs/react_router.png");
const reanimated2 = require("../assets/techs/reanimated2.png");
const react_testing_library = require("../assets/techs/react_testing_library.png");
const firebase = require("../assets/techs/firebase.png");
const redux = require("../assets/techs/redux.webp");
const git = require("../assets/techs/git.png");

const techs = [
  {
    id: 0,
    src: html,
    link: str.html,
    title: "HTML",
    style: "shadow-orange-800",
  },
  {
    id: 1,
    src: css,
    link: str.css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 2,
    src: sass,
    link: str.sass,
    title: "Sass",
    style: "shadow-pink-400",
  },
  {
    id: 3,
    src: tailwind,
    link: str.tailwind,
    title: "Tailwind",
    style: "shadow-cyan-400",
  },
  {
    id: 4,
    src: javascript,
    link: "javascript",
    title: "JavaScript",
    style: "shadow-yellow-300",
  },
  {
    id: 5,
    src: typescript,
    link: "",
    // link: "typescript",
    title: "TypeScript",
    style: "shadow-blue-400",
  },
  {
    id: 6,
    src: reactImg,
    link: "",
    // link: "react",
    title: "React (N)",
    style: "shadow-blue-600",
  },
  {
    id: 7,
    src: redux,
    link: "",
    // link: "redux",
    title: "Redux",
    style: "shadow-purple-500",
  },
  {
    id: 8,
    src: reanimated2,
    link: "",
    // link: "reanimated2",
    title: "Reanimated",
    style: "shadow-blue-500",
  },
  {
    id: 9,
    src: react_navigation,
    link: "",
    // link: "react-navigation",
    title: "React Nav.",
    style: "shadow-purple-500",
  },
  {
    id: 10,
    src: react_router,
    link: "",
    // link: "react-router",
    title: "React Rout.",
    style: "shadow-red-800",
  },
  {
    id: 11,
    src: react_testing_library,
    link: "",
    // link: "react-testing-library",
    title: "R. Testing L.",
    style: "shadow-red-800",
  },
  {
    id: 12,
    src: firebase,
    link: "",
    // title: "Firebase",
    style: "shadow-yellow-500",
  },
  {
    id: 13,
    src: git,
    link: "",
    // link: "git",
    title: "Git",
    style: "shadow-orange-800",
  },
];

export default techs;
