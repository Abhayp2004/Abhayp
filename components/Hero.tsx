import React from 'react'
import '../app/globals.css';
import { MeteorDemo } from './magicui/meteors';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';

const Hero = () => {
  return (
    <div id='hero' className="min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32">
      <div className=''>
        <Spotlight className='top-16 left-10 md:left-32 md:top-20 h-screen' fill="white"/>
      </div>
      
      <div className="flex flex-col items-center justify-start">
        <MeteorDemo />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
        <div className="text-center md:text-left md:px-4 md:w-1/2">
          <div className="text-sm px-2 sm:px-0 font-normal text-white dark:text-white pl-[20px] ml-[50px]">
            I design and code clean and modern websites and explore AI/ML to build intelligent, data-driven solutions. I'm focused on improving my development skills and exploring new skills.
          </div>
        </div>
        <div className="mb-6 md:mb-0 ml-[-40px]">
          <img
            className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover border-2 border-blue-500 hover:border-blue-400 transition-colors duration-300"
            src="/profile.jpeg"
            alt="Abhay Parekh - Frontend Developer"
          />
        </div>
      </div>

      <div>
        <TypewriterEffectSmoothDemo/>
      </div>
    </div>
  )
}

export default Hero
