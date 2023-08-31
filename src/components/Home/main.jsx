import HeroSection  from '@components/Home/heroSection'
import About  from '@components/Home/about'
import Experience  from '@components/Home/experience'
const Main = (props = {}) => {
  return (
    <section className={`${props.className} lg:mt-12 md:mt-6 xs:mt-4 mx-auto`}>
      <HeroSection />
      <About />
      <Experience />
    </section>
  );
}

export default Main;
