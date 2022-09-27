import { TutorialsCmp } from '../../components'

const Portfolio = () => {

  const tutorials = [
    {
      id: 0,
      school: 'MDM',
      courseName: 'CSS Tutorials',
      src: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Tutorials',
      summary: `Media queries, CSS Animations, CSS Transitions, CSS Transforms, CSS flexible boxes layouts`
    },
    {
      id: 1,
      school: 'W3schools',
      courseName: 'CSS Tutorial',
      src: 'https://www.w3schools.com/css/',
      summary: `CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.`
    },
    {
      id: 2,
      school: 'Mosh',
      courseName: 'The Ultimate HTML/CSS Mastery Series',
      src: 'https://codewithmosh.com/p/the-ultimate-html-css',
      summary: `This was a perfectly-structured course packed with exercises, solutions, and a real project. I have learned and understand the what's, why's and how's of HTML and CSS.`,
      certificate: 'https://html2-f.scribdassets.com/3zlf6y36rk8hs848/images/1-5515c61890.jpg'
    },
  ]

  return (
    <TutorialsCmp
      color='blue'
      name='CSS'
      tutorials={tutorials}
      src={require('../../assets/techs/css.png')}
    />
  )
}

export default Portfolio