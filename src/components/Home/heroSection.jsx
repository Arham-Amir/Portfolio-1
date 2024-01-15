'use client'
import { useSelector } from "react-redux";
import { motion } from 'framer-motion'

const fadeInAnimationVarients = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.3
    }
  })
}
const HeroSection = (props = {}) => {
  const { userInfo } = useSelector(state => state.userInfo)

  return (
    <section className="xs:h-[88vh] smd:h-[83vh] flex-center">
      <section className={`${props.className} w-fit text-lightColor flex flex-col gap-7 xs:pb-24 smd:pb-0`}>
        <motion.li
          variants={fadeInAnimationVarients}
          initial="initial"
          animate="animate"
          custom={5}
          className="list-none">
          <p className="text-themeColor/90 font-themeFont 2xl:text-2xl">Hi, my name is </p>
        </motion.li>
        <section className="">
          <motion.li
            variants={fadeInAnimationVarients}
            initial="initial"
            animate="animate"
            custom={6}
            className="list-none">
            <h1 className="font-sans text-lightColor mb-3 xs:text-4xl md:text-5xl lg:text-[56px] xl:text-[68px] 2xl:text-[90px] font-bold">{userInfo.name}</h1>
          </motion.li>
          <motion.li
            variants={fadeInAnimationVarients}
            initial="initial"
            animate="animate"
            custom={7}
            className="list-none">
            <h1 className="text-darkColor  xs:text-4xl md:text-5xl lg:text-[56px] xl:text-[68px] 2xl:text-[90px] font-bold">{userInfo.detail}</h1>
          </motion.li>
        </section>
        <motion.li
          variants={fadeInAnimationVarients}
          initial="initial"
          animate="animate"
          custom={8}
          className="list-none">
          <p className="text-darkColor md:w-[75%] lg:w-[65%] xl:w-[56%] 2xl:w-[65%] text-base 2xl:text-2xl">{userInfo.description}</p>
        </motion.li>
        <motion.li
          variants={fadeInAnimationVarients}
          initial="initial"
          animate="animate"
          custom={9}
          className="list-none">
          <section className="bg-themeColor mt-8 rounded-md w-max">
            <button className="border w-fit px-7 py-4 bg-bg-grad border-themeColor text-themeColor/90 rounded-md font-themeFont text-sm 2xl:text-2xl transition duration-300 hover:-translate-x-1 hover:-translate-y-1 ease-in-out">Resume</button>
          </section>
        </motion.li>
      </section>
    </section>
  );
}

export default HeroSection;
