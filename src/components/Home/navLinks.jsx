import Link from "next/link";

const NavLinks = (props = {}) => {
  return (
    <section className={`${props.className} gap-8 text-xs font-themeFont items-center
     2xl:text-xl 2xl:gap-9`}>
      <section className="cursor-pointer flex xs:flex-col items-center md:flex-row gap-2">
        <p className="text-themeColor text-opacity-90">01.</p>
        <Link href="#about" onClick={()=>props.showHam(false)} className="text-lightColor hover:text-themeColor">About</Link>
      </section>
      <section className="cursor-pointer flex xs:flex-col items-center md:flex-row gap-2">
        <p className="text-themeColor text-opacity-90">02.</p>
        <Link href="#experience" onClick={()=>props.showHam(false)} className="text-lightColor hover:text-themeColor">Experience</Link>
      </section>
      <section className="cursor-pointer flex xs:flex-col items-center md:flex-row gap-2">
        <p className="text-themeColor text-opacity-90">03.</p>
        <Link href="#work" onClick={()=>props.showHam(false)} className="text-lightColor hover:text-themeColor">Work</Link>
      </section>
      <section className="cursor-pointer flex xs:flex-col items-center md:flex-row gap-2">
        <p className="text-themeColor text-opacity-90">04.</p>
        <Link href="#contact" onClick={()=>props.showHam(false)} className="text-lightColor hover:text-themeColor">Contact</Link>
      </section>
      <section className="bg-themeColor rounded-md">
        <button className="hover:-translate-x-1 hover:-translate-y-1 bg-bg-grad ease-in-out transition duration-300 text-themeColor border-themeColor border px-5 py-3 rounded-md">Resume</button>
      </section>
    </section>
  );
}

export default NavLinks;
