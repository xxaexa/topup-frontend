import SlickCarousel from './../component/SlickCarousel'
import { CardGame } from '../component/Card'
import Footer from '../component/Footer'
const Landing = () => {
  return (
    <main className="bg-slate-200">
      <SlickCarousel />
      <section className="my-10 max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto tracking-widest md:text-xl" id="voucher">
        <CardGame />
      </section>
      <Footer />
    </main>
  )
}

export default Landing
