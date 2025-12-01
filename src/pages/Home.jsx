import React from 'react'
import Cta from '../components/Cta'
import OurExperience from '../components/OurExperience'

const Home = () => {
  return (
    <div>
      <OurExperience/>
      <div className="h-[161px] bg-white w-full"></div>
      <Cta/>
    </div>
  )
}

export default Home