'use client'
import { useState } from "react";
import NavLinks from '@components/Home/navLinks'

const Navbar = () => {
  const [ham, showHam] = useState(false);
  return (
    <section className="sticky top-0 w-full z-20 h-[17vh] px-2 bg-bg-grad/90">
      <section className="relative h-full flex items-center text-themeColor justify-between">
        <h1 className="2xl:pl-16 pl-10 xs:-translate-x-6 md:-translate-x-0 duration-200">
          <svg className="h-[50px] 2xl:h-[60px] hover:-translate-x-1 hover:-translate-y-1 ease-in-out transition duration-300 cursor-pointer"
            id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>Logo</title><g
              transform="translate(-8.000000, -2.000000)"><g transform="translate(11.000000, 5.000000)"><polygon id="Shape" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon><path d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z" fill="currentColor"></path></g></g>
          </svg>
        </h1>
        <NavLinks showHam = {showHam} className='xs:hidden md:flex flex-row pr-10 2xl:pr-16' />
        <section onClick={() => { showHam(!ham) }} className="z-30 md:hidden xs:flex flex-col items-end gap-2 pr-4" >
          <p className={`${ham ? 'w-8 rotate-[495deg]' : 'w-9'}  transition-all duration-500 p-[1px] bg-themeColor`}></p>
          <p className={`w-7 p-[1px] transition-all duration-500 bg-themeColor ${ham ? 'opacity-0' : 'opacity-100'} transform ${ham ? '-translate-y-10' : 'translate-y-0'}`}></p>

          <p className={`${ham ? 'w-8 rotate-[405deg] -translate-y-[19px]' : 'w-5'} transition-all duration-500   p-[1px] bg-themeColor`}></p>
        </section>
        <NavLinks showHam = {showHam} className={`xs:flex ${ham ? 'xs:right-0' : 'xs:right-[-100%]'} z-20 md:hidden
        fixed top-0 h-screen sm:w-4/5 xs:w-2/3 transition-all duration-500 justify-center bg-[#112240] flex-col`} />
      </section>
    </section>
  );
}

export default Navbar;
