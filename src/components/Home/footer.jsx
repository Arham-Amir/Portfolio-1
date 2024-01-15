'use client'
import LeftSocialIcons from '@components/Home/leftSocialIcons'
import Link from 'next/link';

const Footer = (props = {}) => {
  return (
    <>
      <section className='xs:flex text-white md:hidden md:flex-row xs:flex-col relative xs:gap-8 md:gap-0 xs:px-2 md:px-0 w-screen'>
        <LeftSocialIcons className="xs:w-full md:w-[9vw] md:fixed xs:static md:left-0 md:h-[83vh] flex md:flex-col xs:flex-row items-center xs:justify-center md:justify-end" />
      </section>
      <Link target="_blank" href="/Arham Amir.pdf" locale={false} className={`${props.className} text-white w-full text-center opacity-60 hover:opacity-100 hover:text-themeColor flex flex-col gap-2 my-7`}>
        <p className="font-themeFont text-xs 2xl:text-base xs:tracking-normal md:tracking-widest">Designed & Built by Arham Amir</p>
        <p className="font-themeFont text-xs 2xl:text-base xs:tracking-normal md:tracking-widest">Check out my resume.</p>
      </Link>
    </>
  );
}

export default Footer;
