'use client'
import ExperienceDetails from '@components/Home/experienceDetails';
import { useState } from 'react';
import { useSelector } from 'react-redux'

const Experience = (props = {}) => {
  const { experiences } = useSelector(state => state.userInfo)
  const [curexp, setcurexp] = useState(0);
  function handleExpClick(id) {
    setcurexp(id);
  }
  return (
    <section id='experience' className={`${props.className} xl:py-24 xs:py-20 flex justify-end`}>
      <article className="h-full transition-all duration-150 xs:w-full xl:w-[87%] flex flex-col xl:p-7">
        <section className="mb-10 cursor-pointer flex items-center flex-row gap-3 font-bold transition-all duration-150 xs:w-full md:w-[75%]">
          <p className="text-lightColor xs:text-xl smd:text-3xl 2xl:text-4xl 3xl:text-5xl">
          <span className="text-themeColor font-themeFont  xs:text-base sm:text-lg font-normal smd:text-xl mr-2 2xl:text-2xl 3xl:text-3xl">02.</span>Where I've Worked</p>
          <span className="bg-darkColor h-[1px] flex-1"></span>
        </section>
        <section className="flex xs:flex-col smd:flex-row text-darkColor gap-6">
          <section className="smd:min-w-max flex xs:flex-row smd:flex-col justify-start items-start custom-scrollbar pb-1">
            {experiences.map((data, i) => {
              return (
                i == 0 ?
                  <button onClick={() => handleExpClick(i)} key={i} className={`font-themeFont smd:border-l-2 smd:border-b-0 xs:border-b-2 border-bg-light xs:min-w-fit smd:min-w-full py-3 px-4 hover:bg-blue-700/10 transition-all duration-300 text-xs 2xl:text-lg
                  ${i == curexp && 'bg-blue-700/10 text-themeColor !border-themeColor'}`}
                  >{data.name}</button>
                  :
                  <button onClick={() => handleExpClick(i)} key={i} className={`font-themeFont py-3 px-4 smd:border-l-2 smd:border-b-0 xs:border-b-2 border-bg-light xs:min-w-fit smd:w-full text-start transition-all duration-300 hover:bg-blue-700/10 text-xs 2xl:text-lg ${i == curexp && 'bg-blue-700/10 text-themeColor !border-themeColor'}`}>{data.name}</button>
              )
            })}
          </section>
          <section className="xs:w-full smd:w-[90%] flex flex-col gap-1">
            <h1 className="text-lg 2xl:text-2xl font-semibold text-lightColor">{experiences[curexp]['role']}
              <span className="text-themeColor"> @ {experiences[curexp].name}</span></h1>
            <p className="font-themeFont text-xs 2xl:text-base"> {experiences[curexp]['duration']}</p>
            <ExperienceDetails data={experiences[curexp]['description']} />
          </section>
        </section>
      </article>
    </section>
  );
}

export default Experience;
