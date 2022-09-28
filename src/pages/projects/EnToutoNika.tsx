import ReactPlayer from 'react-player/youtube'
import {
  useWindowSize,
} from '@react-hook/window-size'

const apple = require("../../assets/AppStoreEN.png");
const android = require("../../assets/google-play-badgeEN.png");

function EnToutoNika() {
  const [width] = useWindowSize()

  return (
    <article
      className='flex flex-col bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen overflow-auto px-20 pt-20'
    >
      {/* Apple badge */}
      <section className='mx-auto my-5 flex flex-col md:flex-row justify-center items-center' >
        <div className='mr-4 hover hover:scale-105 duration-300' >
          <a
            href="https://apps.apple.com/gr/app/in-this-you-conquer/id1602477321"
            target="_blank"
            rel="noreferrer"
          >
            <img src={apple} alt="App store badge" />
          </a>
        </div>
        {/* Video player */}
        <ReactPlayer
          width={width < 700 ? width * .7 : width * .5}
          height={width < 700 ? width * .6 : width * .4}
          url='https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios'
        />
        {/* Android badge */}
        <div className='ml-2 hover hover:scale-105 duration-300' >
          <a
            id="link"
            href="https://play.google.com/store/apps/details?id=com.entoutonika"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={android}
              alt="Google play badge"
              width={140}
              height={60}
            />
          </a>
        </div>
      </section>
      {/* Collapsables */}
      <div className=" accordion h-screen" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0  text-orange-300" id="headingOne">
            <button className="
                      accordion-button
                      relative
                      flex
                      items-center
                      w-full
                      py-4
                      px-5
                      text-base text-left
                      bg-gradient-to-b from-black to-gray-800 
                      border-0
                      rounded-none
                      transition
                      focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body text-orange-300 py-4 px-5 bg-gradient-to-b from-black to-gray-800 ">
              Feed your soul with Orthodox yarns! <br />This application is an Orthodox Christian quiz with 264 questions, all followed by detailed answers with references and quotations to the Holy Bible and texts of the Saints.
              <br />
              <br />
              It has two game modes: Multiple Choices and True – False.
              <br />
              <br />
              There is also a Learning Process, in which the text with the answer appears first and then the question.
              <br />
              <br />
              In each mode you will find 33 questions in the following categories: New Testament, Old Testament, Life of Saints and Holy spiritual life. In addition, there is the Compilation, in which you can play with as many categories as you want mixed.
              <br />
              <br />
              If you play without a timer, you earn one point for each correct answer plus the sum of all the questions you have answered without taking a break. That is, if you played 10 questions in a row, you will get 1 + 10 = 11 points. If you play with a timer, however, the difference is that you will get, instead of one point, the seconds that remained …
              <br />
              <br />
              In addition to the points at the end of each category, you also win a reward. The prize is a golden cross if you play with time and make less than three mistakes, or a silver cross if you play without time… If you make more mistakes, then you will receive a bronze cross.
              <br />
              <br />
              In the Multiple Choices game, you also have 3 aids for each category. When you use one, then one of the 4 options will be removed.
              <br />
              In Compilation, the rewards you receive are more as well as the mistakes you are entitled to make. For example, if you play with 3 categories, you will receive 5 rewards. And the mistakes you are allowed to make are 12.
              <br />
              <br />
              Further, there is a personal screen where you can see your details, your points, your rewards, the total number of answers you have given, and your success rate.
              <br />
              <br />
              On the screen with the winners, you can see the ranking of the first 100 players according to the points or rewards.
              <br />
              In the settings, if you are registered, you can change your name, your email address, your password, or delete your account.
              <br />
              You can also turn on parenting control, which just turns off the Internet links at the end of each complete answer.
              <br />
              Additionally, you can turn off application sounds or delete a category of questions from your device.
              <br />
              <br />
              Lastly, on the info screen you can see the game instructions, as well as all the versions.
              <br />
              <br />
              Thank you very much for your interest.
              <br />
              <br />
              If you have any ideas, comments, or anything else, please contact us at entoutonika7@gmail.com.
              <br />
              <br />
              Have an enjoyable education of the soul!
              <br />
              <br />
              Amen!
            </div>
          </div>
        </div>
        {/* ============================ */}
        <div className="accordion-item  bg-white border border-gray-200">
          <h2 className="accordion-header mb-0 text-orange-300" id="headingTwo">
            <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-left
        bg-gradient-to-b from-black to-gray-800 
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
              aria-controls="collapseTwo">
              Tech specification
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5 bg-gradient-to-b from-black to-gray-800  text-orange-300">
              <h3 className='font-bold text-lg mb-2' >Technologies:</h3>
              <ol start={1} >
                <li className='pl-2'>React v17</li>
                <li className='pl-2'>React Native v66</li>
                <li className='pl-2'>TypeScript</li>
                <li className='pl-2'>React Native Navigation v6</li>
                <li className='pl-2'>formik</li>
                <li className='pl-2'>yup</li>
                <li className='pl-2'>and many more...</li>
              </ol>
              <br />
              <br />
              <h3 className='font-bold text-lg mb-2' >General Information:</h3>
              <h4 className=' underline' >This app uses:</h4>
              <ol start={1} >
                <li className='pl-2'>44 components</li>
                <li className='pl-2'>30 firebase functions</li>
                <li className='pl-2'>7 hooks</li>
                <li className='pl-2'>18 screens</li>
                <li className='pl-2'>100 redux actions</li>
                <li className='pl-2'>5 redux reducers</li>
                <li className='pl-2'>86 custom utility functions</li>
                <li className='pl-2'>etc...</li>
              </ol>
              <br />
              <br />
              <h3 className='font-bold text-lg mb-2' >Dependencies:</h3>
              "@react-native-community/async-storage": "^1.12.1",
              <br />"@react-native-community/hooks": "^2.8.1",
              <br />"@react-native-community/netinfo": "^7.1.9",
              <br />"@react-native-community/push-notification-ios": "^1.10.1",
              <br />"@react-native-firebase/app": "^15.1.1",
              <br />"@react-native-firebase/messaging": "^15.1.1",
              <br />"@react-navigation/drawer": "^6.1.8",
              <br />"@react-navigation/elements": "^1.2.1",
              <br />"@react-navigation/native": "^6.0.6",
              <br />"@react-navigation/native-stack": "^6.2.5",
              <br />"@sentry/react-native": "^3.3.3",
              <br />"@types/react-native-push-notification": "^8.1.1",
              <br />"date-fns": "^2.28.0",
              <br />"firebase": "9.4.1",
              <br />"formik": "^2.2.9",
              <br />"i18next": "^21.6.14",
              <br />"lottie-react-native": "^4.1.3",
              <br />"react": "17.0.2",
              <br />"react-devtools": "~4.14.0",
              <br />"react-devtools-core": "~4.14.0",
              <br />"react-i18next": "^11.15.7",
              <br />"react-native": "0.66.1",
              <br />"react-native-bootsplash": "^4.0.2",
              <br />"react-native-code-push": "^7.0.4",
              <br />"react-native-country-flag": "^1.1.6",
              <br />"react-native-gesture-handler": "^1.10.3",
              <br />"react-native-image-picker": "^4.3.0",
              <br />"react-native-localize": "^2.2.0",
              <br />"react-native-progress": "^5.0.0",
              <br />"react-native-push-notification": "^8.1.1",
              <br />"react-native-reanimated": "^2.9.1",
              <br />"react-native-safe-area-context": "^3.3.2",
              <br />"react-native-screens": "^3.10.1",
              <br />"react-native-share": "^7.9.0",
              <br />"react-native-sound": "^0.11.1",
              <br />"react-native-svg": "^12.4.3",
              <br />"react-native-vector-icons": "^9.0.0",
              <br />"react-native-webview": "^11.23.0",
              <br />"react-redux": "^7.2.5",
              <br />"redux": "^4.1.1",
              <br />"redux-persist": "^6.0.0",
              <br />"redux-thunk": "^2.3.0",
              <br />"typescript": "^4.4.4",
              <br />"uuid": "^8.3.2",
              <br />"yup": "^0.32.11"
            </div>
          </div>
        </div>

      </div>

    </article>
  )
}

export default EnToutoNika
