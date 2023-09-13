const NavLinks = (props = {}) => {
  return (
    <section className={`${props.className} gap-8 xs:text-md md:text-[0.6rem] font-themeFont items-center
     2xl:text-xl 2xl:gap-9`}>
      <section className="cursor-pointer flex xs:flex-col items-center md:flex-row gap-2">
        <p className="text-themeColor text-opacity-90">01.</p>
        <p className="text-lightColor hover:text-themeColor text-opacity-90">About</p>
      </section>
      <section className="cursor-pointer flex xs:flex-col items-center md:flex-row gap-2">
        <p className="text-themeColor text-opacity-90">02.</p>
        <p className="text-lightColor hover:text-themeColor text-opacity-90">Experience</p>
      </section>
      <section className="cursor-pointer flex xs:flex-col items-center md:flex-row gap-2">
        <p className="text-themeColor text-opacity-90">03.</p>
        <p className="text-lightColor hover:text-themeColor text-opacity-90">Work</p>
      </section>
      <section className="cursor-pointer flex xs:flex-col items-center md:flex-row gap-2">
        <p className="text-themeColor text-opacity-90">04.</p>
        <p className="text-lightColor hover:text-themeColor text-opacity-90">Contact</p>
      </section>
      <section className="bg-themeColor rounded-md">
        <button className="hover:-translate-x-1 hover:-translate-y-1 bg-bg-grad ease-in-out transition duration-300 text-themeColor border-themeColor border px-5 py-3 rounded-md">Resume</button>
      </section>
    </section>
  );
}

export default NavLinks;
