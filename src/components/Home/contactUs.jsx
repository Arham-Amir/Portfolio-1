const ContactUs = () => {
  return (
    <section id='contact' className="mb-24 mx-auto py-24 flex flex-col gap-6 items-center justify-center">
      <p className="font-themeFont text-themeColor/90 text-base">04. What's Next</p>
      <h1 className="text-lightColor xs:text-3xl md:text-4xl lg:text-5xl font-bold">Get In Touch</h1>
      <p className="text-darkColor smd:w-4/5 lg:w-3/5 text-center">Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      <section className="bg-themeColor mt-8 rounded-md w-max">
        <button className="border w-fit px-7 py-5 bg-bg-grad border-themeColor text-themeColor/90 rounded-md font-themeFont text-xs 2xl:text-2xl transition ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1">Say Hello</button>
      </section>
    </section>
  );
}

export default ContactUs;
