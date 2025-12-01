import React from 'react'
import Cta from '../components/Cta'
import OurExperience from '../components/OurExperience'
import Reviews from '../components/Reviews'
import Overview from '../components/Overview'

const Home = () => {
  return (
    <div>
      <Overview/>
      <Reviews/>
      <OurExperience/>
      <div className="h-[100px] bg-white w-full"></div>
      <Cta/>
    </div>
  )
}

export default Home