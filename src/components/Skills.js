import React, { useEffect, useState } from 'react'

const skills = {
  frontend: [
    { name: 'React', scale: 0.6 },
    { name: 'Javascript', scale: 0.4 },
    { name: 'CSS', scale: 0.5 },
    { name: 'HTML', scale: 0.3 },
    { name: 'Googling', scale: 1 },
  ],
  design: [
    { name: 'Figma', scale: 0.2 },
    { name: 'Pen & paper', scale: 0.6 },
    { name: 'Copying', scale: 0.9 },
  ],
}

const ProgressBar = ({ scale }) => {
  const [width, setWidth] = useState('0')
  useEffect(() => setWidth(`${scale * 100}%`), [scale])

  return (
    <div className="relative h-2 w-full bg-gray-200 rounded-full">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-blue-400 transition-all duration-1000"
        style={{ width: width }}
      />
    </div>
  )
}

const SkillGroup = ({ name, skills }) => (
  <div className="card">
    <h1 className="font-bold text-gray-600 uppercase mb-4">{name}</h1>
    <div className="grid grid-cols-layout items-center text-gray-600 gap-y-4">
      {skills.map(({ name, scale }, index) => (
        <>
          <span className="text-sm">{name}</span>
          <ProgressBar scale={scale} />
        </>
      ))}
    </div>
  </div>
)

const Skills = () => (
  <div className="grid md:grid-cols-2 items-start gap-8">
    <SkillGroup name="Front end" skills={skills.frontend} />
    <SkillGroup name="Design" skills={skills.design} />
  </div>
)

export default Skills
