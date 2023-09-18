'use client'
import { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai'
import { useSelector } from 'react-redux';

const About = (props = {}) => {

  return (
    <section id='about' className={`h-auto xl:py-24 xs:py-20 w-full transition-all duration-150`}>
      <article className="h-full transition-all duration-150 xl:w-[90%] mx-auto flex flex-col xl:p-7">
        <section className="cursor-pointer mb-10 flex items-center flex-row gap-3 font-bold transition-all duration-150 xs:w-full md:w-[58%]">
          <p className="text-lightColor text-opacity-90 xs:text-xl smd:text-3xl">
            <span className="text-themeColor text-opacity-90 font-themeFont  xs:text-base sm:text-lg smd:text-2xl mr-2">01.</span>About Me</p>
          <span className="bg-darkColor h-[1px] flex-1"></span>
        </section>
        <section className='flex transition-all duration-150 md:flex-row xs:flex-col xs:items-center md:items-start'>
          <AboutLeft className="xs:w-full md:w-[58%]">
          </AboutLeft>
          <AboutRight className="transition-all duration-150 xs:w-[60%] sm:w-[47%] md:w-[42%]">
          </AboutRight>
        </section>
      </article>
    </section>
  );
}

export default About;

const AboutLeft = (props = {}) => {
  const { about } = useSelector(state => state.userInfo)

  return (
    <section className={`${props.className} flex flex-col text-lightColor gap-10`}>
      <section className="flex flex-col gap-5 text-darkColor">
        {about.detail.map((el, i) => {
          return <p key={i}>{el}</p>
        })}
        <section className='grid grid-cols-2 gap-y-2 sm:w-11/12 text-darkColor'>
        {about.toolsAndTech.map((el, i) => {
          return <section key={i} className='flex flex-row items-center gap-2'>
          <AiFillCaretRight className= "text-sm" fill="#64ffda" />
          <p className='text-sm'>{el}</p>
        </section>
        })}
        </section>
      </section>



    </section>
  );
}

const AboutRight = (props = {}) => {
  const [hover, setHover] = useState(false)
  return (
    <section className={`${props.className} transition-all duration-150 md:pl-9 xl:pl-16 md:mt-5 xs:mt-20`}>
      <section className={`border-2 transition-all duration-200 border-themeColor  h-auto w-auto rounded-md
      ${hover && 'translate-x-1 translate-y-1'}`}>
        <img className='rounded-md transition-all duration-200 grayscale-[100] -translate-x-3 -translate-y-3
        hover:grayscale-0 hover:-translate-x-5 hover:-translate-y-5' src="/me.avif" alt="image"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </section>
    </section>
  );
}

