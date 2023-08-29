import HeroSection  from '@components/Home/heroSection'
import About  from '@components/Home/about'
const Main = (props = {}) => {
  return (
    <section className={`${props.className} lg:mt-12 md:mt-6 xs:mt-4 mx-auto`}>
      <HeroSection />
      <About />
    </section>
  );
}

export default Main;
