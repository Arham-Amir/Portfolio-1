import ExperienceDetails from '@components/Home/experienceDetails';

const Experience = (props = {}) => {
  return (
    <section className={`${props.className} xl:mt-32 xs:mt-20 flex justify-end`}>
      <article className="h-full transition-all duration-150 xl:w-[85%] flex flex-col xl:p-7 ">
        <section className="mb-10 cursor-pointer flex items-end flex-row gap-3 font-bold transition-all duration-150 xs:w-full md:w-[75%]">
          <p className="text-themeColor text-opacity-90 text-2xl font-normal">02.</p>
          <p className="text-lightColor hover:text-themeColor text-opacity-90 text-3xl ">
            Where I’ve Worked</p>
          <span className="bg-darkColor h-[1px] flex-1"></span>
        </section>
        <section className="flex flex-row text-darkColor">
          <section className="w-[20%] flex flex-col justify-start items-start">
            <button className="py-3 px-4 border-l-2 border-themeColor bg-blue-700/10 text-themeColor text-sm">Upstatement</button>
            <button className="py-2 px-4 border-l-2 text-sm">Apple</button>
            <button className="py-2 px-4 border-l-2 text-sm">Scout Studio</button>
            <button className="py-2 px-4 border-l-2 text-sm">Starry</button>
            <button className="py-2 px-4 border-l-2 text-sm">MullenLowe</button>
          </section>
          <section className="w-[80%] flex flex-col gap-2">
            <h1 className="text-lg font-bold text-lightColor">Lead Engineer <span className="text-themeColor">@ Upstatement</span></h1>
            <p className="text-xs"> May 2018 - Present</p>
            <ExperienceDetails />
          </section>
        </section>
      </article>
    </section>
  );
}

export default Experience;
