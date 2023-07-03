import React from 'react'
import { SectionWrapper } from '../hoc'
import  {BallCanvas} from './canvas'
import {technologies} from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-wrap flex-row justify-center gap-10'>
      {technologies.map ((technology, index) => (
        <div key={technology.name} className='w-28 h-28'>
          <BallCanvas icon= {technology.icon} />
        </div>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech,'')