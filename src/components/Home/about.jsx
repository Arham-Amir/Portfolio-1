'use client'
import { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai'

const About = (props = {}) => {
  return (
    <section className={`h-auto xl:mt-32 xs:mt-20 w-full transition-all duration-150`}>
      <article className="h-full transition-all duration-150 xl:w-[90%] mx-auto flex flex-col xl:p-7">
        <section className="cursor-pointer mb-10 flex items-center flex-row gap-3 font-bold transition-all duration-150 xs:w-full md:w-[58%]">
          <p className="text-themeColor text-opacity-90 text-xl">01.</p>
          <p className="text-lightColor hover:text-themeColor text-opacity-90 text-3xl ">
            About Me</p>
          <span className="bg-darkColor h-[1px] flex-1"></span>
        </section>
        <section className='flex transition-all duration-150 md:flex-row xs:flex-col xs:items-center md:items-start'>
          <AboutLeft className="xs:w-full md:w-[58%]">
          </AboutLeft>
          <AboutRight className="transition-all duration-150 xs:w-[200px] sm:w-[230px] smd:w-[250px] md:w-[42%]">
          </AboutRight>
        </section>
      </article>
    </section>
  );
}

export default About;

const AboutLeft = (props = {}) => {
  return (
    <section className={`${props.className} flex flex-col text-lightColor gap-10`}>
      <section className="flex flex-col gap-5 text-darkColor">
        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <section className='flex flex-col gap-2'>
          <section className='flex flex-row gap-2 text-darkColor'>
            <section className='flex flex-row items-center gap-2 w-48'>
              <AiFillCaretRight size={12} fill="#64ffda" />
              <p className='text-sm'>JavaScript (ES6+)</p>
            </section>
            <section className='flex flex-row items-center gap-2 w-48'>
              <AiFillCaretRight size={12} fill="#64ffda" />
              <p className='text-sm'>TypeScript</p>
            </section>
          </section>
          <section className='flex flex-row gap-2 text-darkColor'>
            <section className='flex flex-row items-center gap-2 w-48'>
              <AiFillCaretRight size={12} fill="#64ffda" />
              <p className='text-sm'>React</p>
            </section>
            <section className='flex flex-row items-center gap-2 w-48'>
              <AiFillCaretRight size={12} fill="#64ffda" />
              <p className='text-sm'>Eleventy</p>
            </section>
          </section>
          <section className='flex flex-row gap-2 text-darkColor'>
            <section className='flex flex-row items-center gap-2 w-48'>
              <AiFillCaretRight size={12} fill="#64ffda" />
              <p className='text-sm'>Node.js</p>
            </section>
            <section className='flex flex-row items-center gap-2 w-48'>
              <AiFillCaretRight size={12} fill="#64ffda" />
              <p className='text-sm'>WordPress</p>
            </section>
          </section>
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

