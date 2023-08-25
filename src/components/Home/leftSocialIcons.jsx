import { BiLogoGithub, BiLogoInstagram, BiLogoCodepen } from 'react-icons/bi'
import { FiTwitter, FiLinkedin } from 'react-icons/fi'

const LeftSocialIcons = (props = {}) => {
  return (
    <section className={`${props.className} gap-7`}>
      <BiLogoGithub className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={23} />
      <BiLogoInstagram className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={24} />
      <FiTwitter className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={21} />
      <FiLinkedin className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={20} />
      <BiLogoCodepen className='opacity-60 hover:opacity-100 hover:-translate-y-1 hover:text-themeColor' size={22} />
      <span className="xs:hidden md:block p-[1px] h-20 bg-white"></span>
    </section>
  );
}

export default LeftSocialIcons;
