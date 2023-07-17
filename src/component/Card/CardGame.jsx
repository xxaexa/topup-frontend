import { gameVoucher } from './../../Data'
import Container from './../../assets/wrappers/Container'
import Title from '../Title'
import { Link } from 'react-router-dom'
const CardGame = () => {
  return (
    <section>
      <Title text={'GAME'} />
      <Container>
        {gameVoucher.map((game) => {
          const { id, title, src, link } = game
          return (
            <div key={id} className="mx-auto self-center md:w-1/2 lg:w-1/4 mt-20 space-x-4 ">
              <Link to={link}>
                <div className=" w-52 md:w-52 block mx-auto bg-slate-300 bg-opacity-70  rounded-3xl">
                  <img src={src} alt={title} className="w-40 md:w-52 block mx-auto my-2 p-4   hover:scale-125 ease-in-out duration-500 cursor-pointer" />
                </div>
              </Link>
              <p className="text-center font-bold text-xl pb-4">{title}</p>
            </div>
          )
        })}
      </Container>
    </section>
  )
}

export default CardGame
