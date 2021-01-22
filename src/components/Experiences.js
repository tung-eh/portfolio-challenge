import tiktokLogo from '../images/tiktok.svg'
import instaLogo from '../images/instagram.svg'
import pinterestLogo from '../images/pinterest.svg'

const exps = [
  {
    image: tiktokLogo,
    date: 'Feb 2018 - Current',
    role: 'Front-end developer',
    description:
      'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
  },

  {
    image: instaLogo,
    date: 'Aug 2016 - Feb 2018',
    role: 'Full-stack developer',
    description:
      'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
  },
  {
    image: pinterestLogo,
    date: 'Jun 2015 - Aug 2016',
    role: 'Junior front-end developer',
    description:
      'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
  },
]

const Experiences = () => (
  <div className="card">
    <h1 className="text-xl text-gray-600 mb-6">Experiences</h1>
    <div className="grid gap-6 text-gray-400 ml-2">
      {exps.map(({ image, date, role, description }, index) => (
        <div className="flex gap-6" key="index">
          <img className="w-12 h-12 mt-4" src={image} alt="company logo" />
          <div>
            <span className="text-xs mb-3">{date}</span>
            <h2 className="font-semibold text-sm text-gray-700 mb-4">{role}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Experiences
