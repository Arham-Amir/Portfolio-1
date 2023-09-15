const HeroSection = (props = {}) => {
  return (
    <section className={`${props.className} w-full text-lightColor flex flex-col gap-7`}>
      <p className="text-themeColor/90 font-themeFont 2xl:text-2xl">Hi, my name is </p>
      <section className="">
        <h1 className="text-lightColor mb-3 xs:text-4xl md:text-5xl lg:text-[56px] xl:text-[68px] 2xl:text-[90px] font-bold pb-1">Arham Amir</h1>
        <h1 className="text-darkColor  xs:text-4xl md:text-5xl lg:text-[56px] xl:text-[68px] 2xl:text-[90px] font-bold">I build things for the web.</h1>
      </section>
      <p className="text-darkColor md:w-[75%] lg:w-[65%] xl:w-[50%] 2xl:w-[65%] 2xl:text-2xl">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at
        <a className="text-themeColor" href=""> Upstatement.</a></p>
      <section className="bg-themeColor mt-8 rounded-md w-max">
        <button className="border w-fit px-7 py-5 bg-bg-grad border-themeColor text-themeColor/90 rounded-md font-themeFont text-sm 2xl:text-2xl transition duration-300 hover:-translate-x-1 hover:-translate-y-1 ease-in-out">Check out my course !</button>
      </section>
    </section>
  );
}

export default HeroSection;
