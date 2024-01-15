'use client'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const fadeInAnimationVarients = {
  initial: {
    opacity: 0,
    y: 20,
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

const MainProjects = () => {
  const { mainProjects } = useSelector(state => state.userInfo)
  return (
    <section id='work' className="py-24 flex flex-col">
      <motion.div
        variants={fadeInAnimationVarients}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="list-none">
        <section className="mb-10 cursor-pointer flex items-center flex-row gap-3 font-bold transition-all duration-150 xs:w-full md:w-[75%]">
          <p className="text-lightColor text-opacity-90 xs:text-xl smd:text-3xl 2xl:text-4xl 3xl:text-5xl">
            <span className="text-themeColor text-opacity-90 font-themeFont xs:text-base sm:text-lg smd:text-2xl  2xl:text-2xl 3xl:text-3xl font-normal mr-2">03.</span>Some Things I've Built</p>
          <span className="bg-darkColor h-[1px] flex-1"></span>
        </section>
      </motion.div>
      <section className='flex flex-col items-center justify-center gap-24'>
        {mainProjects.map((prj, i) => {
          return (
            <motion.div key={i}
              variants={fadeInAnimationVarients}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="list-none">
              <section className={`flex ${i % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full relative`}>
                <section className={`xs:absolute xs:opacity-10 xs:w-full xs:h-full md:opacity-100 md:relative md:min-w-[55%] md:h-[56vh] 2xl:h-[46vh] image-container`}>
                  <img className="xs:object-cover md:object-fill h-full w-full grayscale-[50] hover:grayscale-0 transition-all duration-200" src={prj['imageLink']} />
                </section>
                <Right prj={prj} i={i} />
              </section>
            </motion.div>
          )
        })}
      </section>
    </section>
  );
}

export default MainProjects;


const Right = (props = {}) => {
  return (
    <section className={`md:bg-transparent xs:w-full xs:px-5 smd:px-10 xs:py-12 smd:py-16 md:p-0 md:min-w-[42vw] lg:min-w-[55%] z-40 ${props.i % 2 == 0 ? 'md:-translate-x-28 lg:-translate-x-[20%] md:text-right xs:text-left' : 'md:translate-x-28 lg:translate-x-[20%] text-left'} flex flex-col gap-1 2xl:gap-2`}>
      <h3 className="text-themeColor font-themeFont text-xs 2xl:text-base">Featured Project</h3>
      <h1 className="text-2xl 2xl:text-3xl 3xl:text-4xl text-lightColor font-bold">{props.prj['name']}</h1>
      <section className="xs:py-5 md:p-5 md:bg-bg-light my-4">
        <p className="text-sm 2xl:text-base text-extraLightColor">{props.prj['description']}</p>
      </section>
      <section className={`text-sm 2xl:text-lg font-themeFont text-extraLightColor flex gap-5 flex-wrap ${props.i % 2 == 0 ? 'md:justify-end' : 'justify-start'}`}>
        {props.prj['techAndTools'].map((el, j) => (
          <p key={j} className='min-w-fit'>{el}</p>
        ))}
      </section>
      <section className={`flex mt-4 gap-5 ${props.i % 2 == 0 ? 'md:justify-end' : 'justify-start'}`}>
        <a target='blank' href={props.prj['githubLink']}><FiGithub className="text-white hover:text-themeColor text-xl " /></a>
        <a target='blank' href={props.prj['projectLink']}><BsBoxArrowUpRight className="text-white hover:text-themeColor text-xl " /></a>
      </section>
    </section>
  );
}
