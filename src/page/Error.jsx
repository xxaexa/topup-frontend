import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className="bg-slate-200 min-h-screen flex justify-center items-center flex-col">
      <h2 className="font-semibold text-5xl text-center">Halaman Tidak Ditemukan</h2>
      <h2 className="font-semibold text-3xl text-center">
        <Link to="/">Kembali</Link>
      </h2>
    </main>
  )
}

export default Error
