import { BiStar, BiGitBranch } from 'react-icons/bi'
import LeftSocialIcons from '@components/Home/leftSocialIcons'

const Footer = (props = {}) => {
  return (
    <>
      <section className='xs:flex text-white md:hidden md:flex-row xs:flex-col relative xs:gap-8 md:gap-0 xs:px-2 md:px-0 w-screen'>
        <LeftSocialIcons className="xs:w-full md:w-[9vw] md:fixed xs:static md:left-0 md:h-[83vh] flex md:flex-col xs:flex-row items-center xs:justify-center md:justify-end" />
      </section>
      <section className={`${props.className} text-white w-full text-center opacity-60 hover:opacity-100 hover:text-themeColor flex flex-col gap-2 my-7`}>
        <p className="font-themeFont text-[0.6rem] xs:tracking-normal md:tracking-widest">Designed & Built by Brittany Chiang</p>
        <section className="font-themeFont text-[0.6rem] flex flex-row justify-center items-center gap-2">
          <BiStar size={15} />
          <p>6,529</p>
          &nbsp;
          <BiGitBranch size={16} />
          <p>3,147</p>
        </section>
      </section>
    </>
  );
}

export default Footer;
