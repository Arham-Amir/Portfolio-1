'use client'
import { useState, useRef, useEffect } from "react";
import NavLinks from '@components/Home/navLinks'
import {motion} from 'framer-motion'

const fadeInAnimationVarients = {
  initial: {
    opacity: 0,
    y: -3,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.005
    }
  }
}

const Navbar = () => {
  const [ham, showHam] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [goingUp, setGoingUp] = useState(true);
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setGoingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
      if (!goingUp) {
        navRef.current.classList.add('!h-[12vh]');
        navRef.current.classList.add('!-top-[12vh]');
        navRef.current.classList.remove('!shadow-md');
      } else {
        if (currentScrollPos > navRef.current.clientHeight) {
          navRef.current.classList.add('!shadow-md');
          navRef.current.classList.add('!h-[12vh]');
          navRef.current.classList.remove('!-top-[12vh]');
        } else {
          navRef.current.classList.remove('!shadow-md');
          navRef.current.classList.remove('!h-[12vh]');
          navRef.current.classList.remove('!-top-[12vh]');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, goingUp]);

  return (
    <section ref={navRef} className="transition-all duration-200 w-full z-50 xs:h-[12vh] smd:h-[16vh] px-2 bg-bg-grad/90 fixed top-0 backdrop-blur-md">
      <section className=" h-full flex items-center text-themeColor justify-between">
        <motion.div
          variants={fadeInAnimationVarients}
          initial="initial"
          animate="animate"
          custom={1}
          className="list-none">
          <h1 className="2xl:pl-16 pl-10 xs:-translate-x-6 md:-translate-x-0 duration-200">
            <img src="/logo.png" alt="logo"
            className="h-[60px] smd:w-[70px] 2xl:w-[80px] hover:-translate-x-1 hover:-translate-y-1 ease-in-out transition duration-300 cursor-pointer" />
          </h1>
        </motion.div>
        <NavLinks showHam={showHam} className='xs:hidden md:flex flex-row pr-10 2xl:pr-16' />
        <section onClick={() => { showHam(!ham) }} className="z-30 md:hidden xs:flex flex-col items-end gap-2 pr-4" >
          <p className={`${ham ? 'w-8 rotate-[495deg]' : 'w-9'}  transition-all duration-500 p-[1px] bg-themeColor`}></p>
          <p className={`w-7 p-[1px] transition-all duration-500 bg-themeColor ${ham ? 'opacity-0' : 'opacity-100'} transform ${ham ? '-translate-y-10' : 'translate-y-0'}`}></p>

          <p className={`${ham ? 'w-8 rotate-[405deg] -translate-y-[19px]' : 'w-5'} transition-all duration-500   p-[1px] bg-themeColor`}></p>
        </section>
        <NavLinks showHam={showHam} className={`xs:flex ${ham ? 'xs:right-0' : 'xs:right-[-100%]'} z-20 md:hidden
        fixed top-0 h-screen sm:w-4/5 xs:w-2/3 transition-all duration-500 justify-center bg-[#112240] flex-col`} />
      </section>
    </section>
  );
}

export default Navbar;
