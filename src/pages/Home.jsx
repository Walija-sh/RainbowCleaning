import React from 'react'
import Cta from '../components/Cta'
import OurExperience from '../components/OurExperience'
import Reviews from '../components/Reviews'
import Overview from '../components/Overview'
import Hero from '../components/Hero'
import Certifications from '../components/Certifications'
import GallerySection from '../components/Gallery'
const Home = () => {
  return (
    <div>
      <Hero />
      <Certifications />
      <Overview />
      <Reviews />
      <OurExperience />
      <GallerySection />
      <div className="h-[100px] bg-white w-full"></div>
      <Cta />
    </div>
  )
}

export default Home