const entoutonika = require("../assets/projects/entoutonika.jpeg");
const hagio_geo = require("../assets/projects/hagio_geo.png");
const tap_me = require("../assets/projects/tap_me.png");
const portfolio = require("../assets/projects/portfolio.png");
const moshify = require("../assets/projects/moshify.png");
const slack_clone = require("../assets/projects/slack_clone.png");
const hooks_news = require("../assets/projects/hooks-news.png");

const projects = [
  {
    id: 0,
    src: entoutonika,
    link: "entoutonika",
    type: "App",
    videoLink: "https://youtu.be/IpYJjVw6wjU",
    projectLink: "https://footios.github.io/etn-promote/",
    original: true,
    style: "bg-yellow-500 text-red-800 shadow-md shadow-yellow-500 ",
  },
  {
    id: 1,
    src: hagio_geo,
    link: "hagio_geo",
    type: "App",
    videoLink: "https://www.youtube.com/watch?v=yqikND3lSss&ab_channel=fotios",
    projectLink: "https://app-info.github.io/hagio-geo-info/",
    original: true,
    style: "bg-blue-200 text-yellow-600 shadow-md shadow-yellow-600 ",
  },
  {
    id: 2,
    src: tap_me,
    link: "tap_me",
    type: "Code",
    videoLink: "https://www.youtube.com/watch?v=HxdLrMhQHcs&ab_channel=fotios",
    projectLink: "https://github.com/react-native-games/tabMe",
    original: true,
    style: "bg-yellow-200 text-indigo-500 shadow-md shadow-yellow-200 ",
  },
  {
    id: 3,
    src: portfolio,
    link: "portfolio",
    type: "Code",
    videoLink: "#",
    projectLink: "https://github.com/all-kind-websites/portfolio",
    original: true,
    style: "bg-cyan-700 text-black shadow-md shadow-cyan-200 ",
  },
  {
    id: 4,
    src: moshify,
    link: "moshify",
    type: "Website",
    videoLink: "https://studio.youtube.com/video/XYTwoqyE32U/edit",
    projectLink: "https://moshified-footios76.netlify.app/#",
    original: false,
  },
  {
    id: 5,
    src: slack_clone,
    link: "entoutonika",
    type: "Website",
    videoLink: "https://www.youtube.com/watch?v=p0Dn9Kwkzcw&ab_channel=fotios",
    projectLink: "https://slack-clone-9a8d0.web.app/register",
    original: false,
  },
  {
    id: 6,
    src: hooks_news,
    link: "hooks_news",
    type: "Website",
    videoLink: "https://www.youtube.com/watch?v=RM7wrLvKu0Y&ab_channel=fotios",
    projectLink: "https://hooks-news-app-d9481.web.app/login",
    original: false,
  },
];

export default projects;
