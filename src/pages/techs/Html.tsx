import { TutorialsCmp } from '../../components'

const Portfolio = () => {

  const tutorials = [
    {
      id: 0,
      school: 'MDM',
      courseName: 'Structuring the web with HTML',
      src: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
      summary: `HTML is used to specify whether your web content should be recognized as a paragraph, list, heading, link, image, multimedia player, form, or one of many other available elements or even a new element that you define.`
    },
    {
      id: 1,
      school: 'W3schools',
      courseName: 'HTML Tutorial',
      src: 'https://www.w3schools.com/html/default.asp',
      summary: `At W3Schools, I've found complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more...`
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
      name='HTML'
      tutorials={tutorials}
      src={require('../../assets/techs/html.png')}
    />
  )
}

export default Portfolio