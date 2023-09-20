'use client'
import { useState } from 'react';
import { CiFolderOn } from 'react-icons/ci'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { useSelector } from 'react-redux';
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
      delay: 0.6,
      duration: 0.4
    }
  },
  animate1: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index
    }
  })
}

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const { miniProjects } = useSelector(state => state.userInfo)

  return (
    <section className="py-24 flex flex-col gap-8 justify-center items-center w-full">
      <section className="flex flex-col gap-5 items-center">
        <motion.div
          variants={fadeInAnimationVarients}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="list-none">
          <h1 className="text-lightColor xs:text-xl smd:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold">Other Noteworthy Projects</h1>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVarients}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="list-none">
          <p className="text-themeColor font-themeFont text-sm 2xl:text-lg">view the archive</p>
        </motion.div>
      </section>
      <section className="grid gap-5 xs:grid-cols-1 smd:grid-cols-2  xl:grid-cols-3 transition-all duration-200">
        {miniProjects.map((el, i) => {
          if (showMore == false && i < 6) {
            return <motion.div key={i}
              variants={fadeInAnimationVarients}
              initial="initial"
              whileInView="animate1"
              custom={(1 + i * 0.05)}
              viewport={{
                once: true,
              }}
              className="list-none">
              <Card el={el} />
            </motion.div>
          }
          else if (showMore == true)
            return <motion.div key={i}
              variants={fadeInAnimationVarients}
              initial="initial"
              whileInView="animate1"
              custom={(i * 0.05)}
              viewport={{
                once: true,
              }}
              className="list-none">
              <Card el={el} />
            </motion.div>
        })}
      </section>
      <motion.div
        variants={fadeInAnimationVarients}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="list-none">
        <section className="bg-themeColor mt-8 rounded-md w-max">
          <button onClick={() => setShowMore(!showMore)} className="border w-fit px-7 py-5 bg-bg-grad border-themeColor text-themeColor/90 rounded-md font-themeFont text-xs 2xl:text-2xl transition ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1">{showMore ? 'Show Less' : 'Show More'}</button>
        </section>
      </motion.div>
    </section >
  );
}

export default OtherProjects;

function Card(props = {}) {

  return (
    <a href={props.el['link']} target='blank' className="bg-bg-light rounded-md w-full h-full px-7 py-8 flex flex-col gap-7 transition-all duration-300 ease-in-out hover:-translate-y-2">
      <section className="text-lightColor flex justify-between items-center">
        <p><CiFolderOn className="text-themeColor text-5xl" /></p>
        <p><BsBoxArrowUpRight className="text-xl text-lightColor" /></p>
      </section>
      <section className="flex gap-3 flex-col">
        <h1 className="text-lightColor hover:text-themeColor font-bold text-xl 2xl:text-2xl">{props.el.title}</h1>
        <p className="text-darkColor text-sm 2xl:text-lg leading-6">{props.el.description}</p>
      </section>
      <section className="text-darkColor flex flex-wrap gap-2 text-xs 2xl:text-base mt-auto">
        {props.el.tech.map((te, i) => {
          return <p key={i}>{te}</p>
        })}
      </section>
    </a>
  )
}
