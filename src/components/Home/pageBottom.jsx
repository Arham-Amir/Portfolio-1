'use client'
import LeftSocialIcons from '@components/Home/leftSocialIcons'
import RightGmailLink from '@components/Home/rightGmailLink'
import { motion } from 'framer-motion';

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
      duration: 0.3
    }
  }
}

const PageBottom = (props = {}) => {
  return (
    <section className='xs:hidden text-white md:block relative'>
      <motion.div
        variants={fadeInAnimationVarients}
        initial="initial"
        animate="animate"
        className="list-none">
        <LeftSocialIcons className="md:w-[9vw] md:fixed left-0 bottom-0 md:h-[83vh] flex md:flex-col items-center md:justify-end" />
      </motion.div>
      <motion.div
        variants={fadeInAnimationVarients}
        initial="initial"
        animate="animate"
        className="list-none">
        <RightGmailLink className="w-[9vw] fixed right-0 bottom-0 h-[83vh] flex flex-col items-center justify-end" />
      </motion.div>
    </section>
  );
}

export default PageBottom;
