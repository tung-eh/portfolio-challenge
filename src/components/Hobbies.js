import React from 'react'

import hobbyImg1 from '../images/hobby1.jpg'
import hobbyImg2 from '../images/hobby2.jpg'
import hobbyImg3 from '../images/hobby3.jpg'

const hobbies = [
  {
    image: hobbyImg1,
    name: 'Gaming',
    description: 'Quisque feugiat malesuada molestie.',
  },
  {
    image: hobbyImg2,
    name: 'Cooking',
    description: 'Quisque feugiat malesuada molestie.',
  },
  {
    image: hobbyImg3,
    name: 'Biking',
    description: 'Quisque feugiat malesuada molestie.',
  },
]

const Hobbies = () => (
  <div className="card">
    <h1 className="text-xl text-gray-600 mb-6">Hobbies</h1>
    <div className="grid gap-8">
      {hobbies.map(({ image, name, description }, index) => (
        <div key={index}>
          <img
            className="h-32 w-full object-cover rounded-xl mb-4"
            src={image}
            alt={name}
          />
          <h2 className="font-semibold text-gray-600 mb-2">{name}</h2>
          <p className="text-xs">{description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Hobbies
