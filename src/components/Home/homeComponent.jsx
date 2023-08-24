'use client'
import { useSelector } from 'react-redux'
import Navbar from '@components/Home/navbar'

const HomeComponent = (props = {}) => {
  // const name = useSelector(state => state.userInfo.name)
  return (
    <section className='text-white h-[1800px] overflow-hidden'>
      <Navbar />
      First Commit With Redux
    </section>
  );
}

export default HomeComponent;
