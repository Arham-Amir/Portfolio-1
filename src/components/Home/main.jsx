import HeroSection  from '@components/Home/heroSection'
import About  from '@components/Home/about'
import Experience  from '@components/Home/experience'
import MainProjects  from '@components/Home/mainProjects'
import OtherProjects  from '@components/Home/otherProjects'
import ContactUs  from '@components/Home/contactUs'
const Main = (props = {}) => {
  return (
    <section className={`${props.className} lg:mt-12 md:mt-6 xs:mt-4 mx-auto w-max`}>
      <HeroSection />
      <About />
      <Experience />
      <MainProjects />
      <OtherProjects />
      <ContactUs />
    </section>
  );
}

export default Main;
