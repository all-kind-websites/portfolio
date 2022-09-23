const entoutonika = require("../assets/portfolio/entoutonika.jpeg");
const hagio_geo = require("../assets/portfolio/hagio_geo.png");
const moshify = require("../assets/portfolio/moshify.png");
const tap_me = require("../assets/portfolio/tap_me.png");
const slack_clone = require("../assets/portfolio/slack_clone.png");
const hooks_news = require("../assets/portfolio/hooks-news.png");

const portfolios = [
  {
    id: 0,
    src: entoutonika,
    type: "App",
    videoLink: "https://youtu.be/IpYJjVw6wjU",
    projectLink: "https://footios.github.io/etn-promote/",
  },
  {
    id: 4,
    src: hagio_geo,
    type: "App",
    videoLink: "https://www.youtube.com/watch?v=yqikND3lSss&ab_channel=fotios",
    projectLink: "https://app-info.github.io/hagio-geo-info/",
  },
  {
    id: 1,
    src: tap_me,
    type: "Code",
    videoLink: "https://www.youtube.com/watch?v=HxdLrMhQHcs&ab_channel=fotios",
    projectLink: "https://github.com/react-native-games/tabMe",
  },
  {
    id: 2,
    src: moshify,
    type: "Website",
    videoLink: "https://studio.youtube.com/video/XYTwoqyE32U/edit",
    projectLink: "https://moshified-footios76.netlify.app/#",
  },
  {
    id: 3,
    src: slack_clone,
    type: "Website",
    videoLink: "https://www.youtube.com/watch?v=p0Dn9Kwkzcw&ab_channel=fotios",
    projectLink: "https://slack-clone-9a8d0.web.app/register",
  },
  {
    id: 4,
    src: hooks_news,
    type: "Website",
    videoLink: "https://www.youtube.com/watch?v=RM7wrLvKu0Y&ab_channel=fotios",
    projectLink: "https://hooks-news-app-d9481.web.app/login",
  },
];

export default portfolios;
