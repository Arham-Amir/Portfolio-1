'use client'
import { useState } from 'react';
import { AiOutlineFolder } from 'react-icons/ai'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { useSelector } from 'react-redux';

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const { miniProjects } = useSelector(state => state.userInfo)

  return (
    <section className="py-24 flex flex-col gap-8 justify-center items-center w-full">
      <section className="flex flex-col gap-5 items-center">
        <h1 className="text-lightColor xs:text-xl smd:text-3xl font-bold">Other Noteworthy Projects</h1>
        <p className="text-themeColor font-themeFont text-sm">view the archive</p>
      </section>
      <section className="grid gap-5 xs:grid-cols-1 smd:grid-cols-2  xl:grid-cols-3">
        {miniProjects.map((el, i) => {
          if (showMore == false && i < 6) {
            return <Card key={i} el={el} />
          }
          else if (showMore == true)
            return <Card key={i} el={el} />
        })}
      </section>
      <section className="bg-themeColor mt-8 rounded-md w-max">
        <button onClick={() => setShowMore(!showMore)} className="border w-fit px-7 py-5 bg-bg-grad border-themeColor text-themeColor/90 rounded-md font-themeFont text-xs 2xl:text-2xl transition ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1">{showMore ? 'Show Less' : 'Show More'}</button>
      </section>
    </section >
  );
}

export default OtherProjects;

function Card(props = {}) {

  return (
    <a href={props.el['link']} target='blank' className="bg-bg-light rounded-md w-full h-full p-7 flex flex-col gap-7">
      <section className="text-lightColor flex justify-between items-center">
        <p><AiOutlineFolder className="text-themeColor text-5xl" /></p>
        <p><BsBoxArrowUpRight className="text-xl text-lightColor" /></p>
      </section>
      <section className="flex gap-3 flex-col">
        <h1 className="text-lightColor hover:text-themeColor font-bold text-xl">{props.el.title}</h1>
        <p className="text-darkColor text-sm">{props.el.description}</p>
      </section>
      <section className="text-darkColor flex flex-wrap gap-2 text-xs mt-auto">
        {props.el.tech.map((te, i) => {
          return <p key={i}>{te}</p>
        })}
      </section>
    </a>
  )
}
