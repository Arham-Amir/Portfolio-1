import { BiStar, BiGitBranch } from 'react-icons/bi'

const Footer = () => {
  return (
    <section className="text-white w-full text-center opacity-60 hover:opacity-100 hover:text-themeColor flex flex-col gap-2">
      <p className="font-themeFont text-xs xs:tracking-normal md:tracking-widest">Designed & Built by Brittany Chiang</p>
      <section className="font-themeFont text-xs flex flex-row justify-center items-center gap-2">
        <BiStar size={15} />
        <p>6,529</p>
        &nbsp;
        <BiGitBranch size={16} />
        <p>3,147</p>
      </section>

    </section>
  );
}

export default Footer;
