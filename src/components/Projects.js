import projImg1 from '../images/project1.png'
import projImg2 from '../images/project2.png'
import projImg3 from '../images/project3.png'

const projects = [
  {
    image: projImg1,
    tags: ['HTML', 'CSS', 'responsive'],
    name: 'Recipe blog',
    description:
      'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    demoLink: 'https://tung-recipe-challenge.netlify.app',
    githubLink: 'https://github.com/tung-eh/recipe-challenge',
  },
  {
    image: projImg2,
    tags: ['HTML', 'CSS', 'responsive'],
    name: 'My Gallery',
    description:
      'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    demoLink: 'https://tung-gallery-challenge.netlify.app/',
    githubLink: 'https://github.com/tung-eh/my-gallery-challenge',
  },
  {
    image: projImg3,
    tags: ['HTML', 'CSS', 'responsive'],
    name: 'Checkout',
    description:
      'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    demoLink: 'https://tung-checkout-challenge.netlify.app/',
    githubLink: 'https://github.com/tung-eh/checkout-challenge',
  },
]

const Projects = () => (
  <div className="grid gap-2">
    <div className="card">
      <span className="text-gray-600">Projects ({projects.length})</span>
    </div>
    <div className="grid gap-4">
      {projects.map(
        ({ image, tags, name, description, demoLink, githubLink }, index) => (
          <div className="card flex gap-8" key={index}>
            <img className="rounded-xl w-72" src={image} alt={name} />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-600 mb-5">
                  {tags.map((tag) => (
                    <span className="mr-2" key={tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl text-gray-700 mb-3">{name}</h2>
                <p className="text-sm">{description}</p>
              </div>
              <div>
                <a
                  className="border border-blue-400 bg-blue-400 text-white rounded-xl py-2 px-8 mr-3"
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  className="border border-blue-400 text-blue-400 rounded-xl py-2 px-8"
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </div>
)

export default Projects
