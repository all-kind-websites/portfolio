const html = require("../assets/html.png");
const css = require("../assets/css.png");
const javascript = require("../assets/javascript.png");
const nextjs = require("../assets/nextjs.png");
const graphql = require("../assets/graphql.png");
const node = require("../assets/node.png");
const reactImg = require("../assets/react.png");
const tailwind = require("../assets/tailwind.png");
// const github = require('../assets/github.png')

const techs = [
  {
    id: 0,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 1,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 2,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 3,
    src: reactImg,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 4,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 5,
    src: nextjs,
    title: "Next JS",
    style: "shadow-white",
  },
  {
    id: 6,
    src: graphql,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
  {
    id: 7,
    src: node,
    title: "Node JS",
    style: "shadow-green-500",
  },
  // {
  //   id: 7,
  //   src: github,
  //   title: 'GitHub',
  //   style: 'shadow-gray-400'
  // },
];

export default techs;
