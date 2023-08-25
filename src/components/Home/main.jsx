import Footer from '@components/Home/footer'

const Main = (props = {}) => {
  return (
    <section className={`${props.className}`}>
      <Footer />
    </section>
  );
}

export default Main;
