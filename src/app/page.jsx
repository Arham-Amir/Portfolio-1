import Navbar from '@components/Home/navbar'
import PageBottom from '@components/Home/pageBottom'
import Main from '@components/Home/main'
import Footer from '@components/Home/footer'


export default function Home() {
  return (
    <main className='max-w-[100vw] overflow-x-hidden'>
      <Navbar />
      <PageBottom />
      <Main className='xs:w-full md:max-w-[82vw] xs:px-8 smd:px-10 lg:px-14 transition-all duration-200 '></Main>
      <Footer className='xs:w-full' ></Footer>
    </main>
  )
}
