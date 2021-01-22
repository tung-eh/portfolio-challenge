import React from 'react'

import Icon from '../Icon'
import avatar from '../images/avatar.jpg'

const PersonalInfo = () => (
  <div className="card grid gap-8">
    <div>
      <img className="rounded-xl mb-4" src={avatar} alt="avatar" />
      <h1 className="font-semibold text-gray-600 text-xl">Karen Fields</h1>
      <h2>Front-end developer</h2>
    </div>
    <div className="grid grid-cols-info items-center gap-y-2 gap-x-4 text-gray-600">
      <Icon className="w-6 h-6 fill-current" name="mail" />
      <span>karen@example.com</span>
      <Icon className="w-6 h-6 fill-current" name="phone" />
      <span>(+603) 546 624 342</span>
    </div>
    <p>
      Self-motivated developer, who is willing to learn and create outstanding
      UI applications.
    </p>
  </div>
)

export default PersonalInfo
