const RightGmailLink = (props = {}) => {
  return (
    <section className={`${props.className} gap-7`}>
      <p className="text-verticle font-themeFont text-xs opacity-60 hover:opacity-100 hover:text-themeColor hover:-translate-y-1 tracking-widest">brittany.chiang@gmail.com</p>
      <span className="p-[1px] h-20 bg-white"></span>
    </section>
  );
}

export default RightGmailLink;
