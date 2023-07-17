import Container from '../assets/wrappers/Container'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <section>
      <Container>
        <div className="mx-auto text-center p-5 border-2">
          <br />
          <form action="">
            <input type="text" name="id" className="w-64 md:w-96 p-1 bg-main mb-4 mx-2 bg-opacity-20 rounded-sm ring-1 ring-white border-2" placeholder="MASUKAN KODE UNIK" />
            <button>
              <FaSearch />
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Search
