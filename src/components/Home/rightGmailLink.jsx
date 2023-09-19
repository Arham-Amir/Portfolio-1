'use client'
import { useSelector } from "react-redux";

const RightGmailLink = (props = {}) => {
  const { userInfo } = useSelector(state => state.userInfo)

  return (
    <section className={`${props.className} gap-7`}>
      <p className="text-verticle font-themeFont text-xs 2xl:text-base opacity-60 hover:opacity-100 hover:text-themeColor hover:-translate-y-1 tracking-widest">{userInfo['email']}</p>
      <span className="p-[1px] h-20 bg-white"></span>
    </section>
  );
}

export default RightGmailLink;
