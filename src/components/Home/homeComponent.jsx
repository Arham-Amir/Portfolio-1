'use client'
import { useSelector } from 'react-redux'

const HomeComponent = (props = {}) => {
  const name = useSelector(state => state.userInfo.name)
  console.log(name)
  return (
    <section>

    </section>
  );
}

export default HomeComponent;
