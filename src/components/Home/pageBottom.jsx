import LeftSocialIcons from '@components/Home/leftSocialIcons'
import RightGmailLink from '@components/Home/rightGmailLink'


const PageBottom = (props = {}) => {
  return (
    <section className='xs:hidden text-white md:block relative'>
      <LeftSocialIcons className="md:w-[9vw] md:fixed left-0 bottom-0 md:h-[83vh] flex md:flex-col items-center md:justify-end" />
      <RightGmailLink className="w-[9vw] fixed right-0 bottom-0 h-[83vh] flex flex-col items-center justify-end" />
    </section>
  );
}

export default PageBottom;
