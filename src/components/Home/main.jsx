import HeroSection  from '@components/Home/heroSection'
const Main = (props = {}) => {
  return (
    <section className={`${props.className} lg:mt-12 md:mt-6 xs:mt-4 mx-auto`}>
      <HeroSection />
    </section>
  );
}

export default Main;
