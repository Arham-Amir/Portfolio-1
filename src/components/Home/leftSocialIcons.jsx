'use client'
import { BiLogoGithub, BiLogoInstagram, BiLogoCodepen } from 'react-icons/bi'
import { FiTwitter, FiLinkedin } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const LeftSocialIcons = (props = {}) => {
  const { userInfo } = useSelector(state => state.userInfo)

  return (
    <section className={`${props.className} gap-7`}>
      <a href={userInfo['github']} target='blank'><BiLogoGithub className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={23} /></a>
      <a href={userInfo['instagram']} target='blank'><BiLogoInstagram className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={24} /></a>
      <a href={userInfo['twitter']} target='blank'><FiTwitter className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={21} /></a>
      <a href={userInfo['linkedin']} target='blank'><FiLinkedin className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={20} /></a>
      <a href={userInfo['codepen']} target='blank'><BiLogoCodepen className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={22} /></a>
      <span className="xs:hidden md:block p-[1px] h-20 bg-white"></span>
    </section>
  );
}

export default LeftSocialIcons;
