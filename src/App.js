import React from 'react'

import Blogs from './components/Blogs'
import Experiences from './components/Experiences'
import Hobbies from './components/Hobbies'
import PersonalInfo from './components/PersonalInfo'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="grid grid-cols-layout grid-rows-layout gap-8 min-h-screen bg-gray-100 p-14">
      <div className="grid gap-10">
        <PersonalInfo />
        <Experiences />
        <Hobbies />
      </div>
      <div className="grid gap-10 content-start">
        <Skills />
        <Projects />
        <Blogs />
      </div>
      <div className="col-span-2 text-center text-xs text-gray-400 mt-20">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
