'use client'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';

const fadeInAnimationVarients = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.4
    }
  }
}

const Skills = () => {
  const { skills } = useSelector(state => state.userInfo)
  return (
    <motion.div
      variants={fadeInAnimationVarients}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="list-none">
      <section id='skills' className="xs:w-full md:w-[85%] mx-auto py-24 flex flex-col gap-6 items-center justify-center">
        <section className="mb-10 cursor-pointer flex items-center flex-row gap-3 font-bold transition-all duration-150 w-full">
          <p className="text-lightColor xs:text-xl smd:text-3xl 2xl:text-4xl 3xl:text-5xl">
            <span className="text-themeColor font-themeFont  xs:text-base sm:text-lg font-normal smd:text-xl mr-2 2xl:text-2xl 3xl:text-3xl">02.</span>Technical Skills</p>
          <span className="bg-darkColor h-[1px] flex-1"></span>
        </section>
        <section className="flex xs:flex-col smd:flex-row text-darkColor gap-6 xs:w-full md:w-[85%]">
          <section className='grid grid-cols-1 smd:grid-cols-2 place-items-center gap-y-3 gap-x-5 w-full'>
            {Object.keys(skills).map((el, i) => (
              <section key={i} className='flex flex-col gap-3 max-w-full'>
                <p>{el}</p>
                <progress className="progress w-64 max-w-full progress-accent bg-lightColor" value={skills[el]} max="100"></progress>
              </section>
            ))}
          </section>
        </section>
      </section>
    </motion.div>
  );
}

export default Skills;
