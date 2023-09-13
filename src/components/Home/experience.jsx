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
    <section className={`${props.className} xl:py-24 xs:py-20 flex justify-end`}>
      <article className="h-full transition-all duration-150 xs:w-full xl:w-[87%] flex flex-col xl:p-7">
        <section className="mb-10 cursor-pointer flex items-center flex-row gap-3 font-bold transition-all duration-150 xs:w-full md:w-[75%]">
          <p className="text-lightColor hover:text-themeColor text-opacity-90 text-3xl ">
          <span className="text-themeColor text-opacity-90 text-2xl font-normal mr-2">02.</span>Where I've Worked</p>
          <span className="bg-darkColor h-[1px] flex-1"></span>
        </section>
        <section className="flex xs:flex-col smd:flex-row text-darkColor gap-6">
          <section className="smd:min-w-max flex xs:flex-row smd:flex-col justify-start items-start custom-scrollbar pb-1">
            {Object.keys(experiences).map((data, i) => {
              return (
                i == 0 ?
                  <button onClick={() => handleExpClick(i)} key={i} className={`smd:border-l-2 smd:border-b-0 xs:border-b-2 xs:min-w-fit smd:min-w-full py-3 px-4 hover:bg-blue-700/10 transition-all duration-300
                  ${i == curexp && 'bg-blue-700/10 text-themeColor border-themeColor'} text-sm`}
                  >{data}</button>
                  :
                  <button onClick={() => handleExpClick(i)} key={i} className={`py-3 px-4 smd:border-l-2 smd:border-b-0 xs:border-b-2 xs:min-w-fit smd:w-full text-start text-sm transition-all duration-300 hover:bg-blue-700/10 ${i == curexp && 'bg-blue-700/10 text-themeColor  border-themeColor'}`}>{data}</button>
              )
            })}
          </section>
          <section className="xs:w-full smd:w-[90%] flex flex-col gap-2">
            <h1 className="text-lg font-bold text-lightColor">{experiences[Object.keys(experiences)[curexp]]['role']}
              <span className="text-themeColor"> @ {Object.keys(experiences)[curexp]}</span></h1>
            <p className="text-xs"> {experiences[Object.keys(experiences)[curexp]]['duration']}</p>
            <ExperienceDetails data={experiences[Object.keys(experiences)[curexp]]['description']} />
          </section>
        </section>
      </article>
    </section>
  );
}

export default Experience;
