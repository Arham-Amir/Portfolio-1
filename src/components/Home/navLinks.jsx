const NavLinks = (props = {}) => {
  return (
    <section className={`${props.className} gap-7 xs:text-md md:text-sm font-themeFont items-center`}>
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
      <section className="text-themeColor">
        <button className="hover:-translate-x-1 hover:-translate-y-1 ease-in-out transition duration-300  border-themeColor border px-5 py-2 rounded-md">Resume</button>
      </section>
    </section>
  );
}

export default NavLinks;
