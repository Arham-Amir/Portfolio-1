'use client'
import Link from 'next/link'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { useSelector } from 'react-redux'
const MainProjects = () => {
  const { mainProjects } = useSelector(state => state.userInfo)
  return (
    <section className="py-24 flex flex-col">
      <section className="mb-10 cursor-pointer flex items-center flex-row gap-3 font-bold transition-all duration-150 xs:w-full md:w-[75%]">
        <p className="text-lightColor hover:text-themeColor text-opacity-90 text-3xl ">
          <span className="text-themeColor text-opacity-90 text-2xl font-normal mr-2">03.</span>Some Things I've Built</p>
        <span className="bg-darkColor h-[1px] flex-1"></span>
      </section>
      <section className='flex flex-col items-center justify-center gap-24'>
        {Object.keys(mainProjects).map((prj, i) => {
          return (
            <section key={i} className={`flex ${i % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full relative`}>
              <section className={`xs:absolute xs:opacity-10 xs:w-full xs:h-full md:opacity-100 md:relative md:min-w-[55%] md:h-[62vh] image-container`}>
                <img className="xs:object-cover md:object-fill h-full w-full grayscale-[50] hover:grayscale-0 transition-all duration-200" src={mainProjects[prj]['imageLink']} />
              </section>
              <Right src={mainProjects[prj]['imageLink']} mainProjects={mainProjects} prj={prj} i={i} />
            </section>
          )
        })}
      </section>
    </section>
  );
}

export default MainProjects;


const Right = (props = {}) => {
  return (
    <section className={`md:bg-transparent xs:w-full xs:px-5 smd:px-10 xs:py-12 smd:py-16 md:p-0 md:min-w-[42vw] lg:min-w-[55%] z-40 ${props.i % 2 == 0 ? 'md:-translate-x-28 lg:-translate-x-[20%] md:text-right xs:text-left' : 'md:translate-x-28 lg:translate-x-[20%] text-left'} flex flex-col gap-1`}>
      <h3 className="text-themeColor font-themeFont text-xs">Featured Project</h3>
      <h1 className="text-2xl text-lightColor font-bold">{props.prj}</h1>
      <section className="xs:py-5 md:p-5 md:bg-bg-light my-4">
        <p className="text-sm text-extraLightColor">{props.mainProjects[props.prj]['description']}</p>
      </section>
      <section className={`text-sm text-extraLightColor flex gap-5 flex-wrap ${props.i % 2 == 0 ? 'md:justify-end' : 'justify-start'}`}>
        {props.mainProjects[props.prj]['techAndTools'].map((el, j) => (
          <p key={j} className='min-w-fit'>{el}</p>
        ))}
      </section>
      <section className={`flex mt-4 gap-5 ${props.i % 2 == 0 ? 'md:justify-end' : 'justify-start'}`}>
        <Link href={props.mainProjects[props.prj]['githubLink']}><FiGithub className="text-white hover:text-themeColor text-xl " /></Link>
        <Link href={props.mainProjects[props.prj]['projectLink']}><BsBoxArrowUpRight className="text-white hover:text-themeColor text-xl " /></Link>
      </section>
    </section>
  );
}
