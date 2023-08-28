'use client'
import { useSelector } from 'react-redux'
import LeftSocialIcons from '@components/Home/leftSocialIcons'
import RightGmailLink from '@components/Home/rightGmailLink'
import Footer from '@components/Home/footer'

const PageBottom = (props = {}) => {
  // const name = useSelector(state => state.userInfo.name)
  return (
    <section className='text-white h-[1800px] flex md:flex-row xs:flex-col relative xs:mt-28 md:mt-0 xs:gap-8 md:gap-0 xs:px-2 md:px-0'>
      <LeftSocialIcons className="xs:w-full md:w-[9vw] md:fixed xs:static md:left-0 md:h-screen flex md:flex-col xs:flex-row items-center xs:justify-center md:justify-end" />
      <section className={`${props.className} mx-auto xs:w-full md:w-[82%] md:mt-28`}>
        <Footer />
      </section>
      <RightGmailLink className="xs:hidden w-[9vw] fixed right-0 h-screen md:flex flex-col items-center justify-end" />
    </section>
  );
}

export default PageBottom;
