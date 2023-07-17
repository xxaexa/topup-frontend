import Form from './../../component/Form'
import Footer from './../../component/Footer'
import Modal from './../../component/Modal'
import Tutorial from './../../component/Tutorial'
import { useSelector } from 'react-redux'
import { gameVoucher } from '../../Data'

const Aov = () => {
  const { isOpen } = useSelector((store) => store.modal)
  const currency = gameVoucher[0].currency
  const game = gameVoucher[0].game
  return (
    <main className="bg-slate-200 min-h-screen ">
      {isOpen && <Modal />}
      <section className="flex flex-wrap justify-center p-2 tracking-widest md:space-x-32">
        <Tutorial />
        <Form currency={currency} game={game} />
      </section>
      <div className="md:fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  )
}

export default Aov
