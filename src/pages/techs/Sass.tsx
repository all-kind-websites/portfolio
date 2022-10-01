import { TutorialsCmp } from '../../components'

const Sass = () => {

  const tutorials = [
    {
      id: 0,
      school: 'Sass',
      courseName: 'Structuring the web with HTML',
      src: 'https://sass-lang.com/guide',
      summary: `Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.`
    },
    {
      id: 1,
      school: 'freeCodeCamp',
      courseName: 'Sass Tutorial for Beginners - CSS With Superpowers',
      src: 'https://www.youtube.com/watch?v=nu5mdN2JIwM&t=1807s&ab_channel=TraversyMedia',
      summary: `In this course, you will learn the basics of Sass. We will start with a brief overview of what Sass is along with what is required to incorporate Sass into your environment. We will also set up a Sass compiler in Visual Studio Code. You will learn about Sass variables, maps, nesting, functions, mixins, extending, and operations.
      Lastly, we will start from scratch on a real-world project (Portfolio website) using Sass. We will go step-by-step through each part, and at the end, we will deploy the site.`
    },
  ]

  return (
    <TutorialsCmp
      name='Sass'
      color='pink'
      tutorials={tutorials}
      src={require('../../assets/techs/sass.png')}
    />
  )
}

export default Sass