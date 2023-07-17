import { useNavigate } from 'react-router-dom'

const Table = ({ orders }) => {
  const navigate = useNavigate()
  return (
    <table className="rounded-lg w-11/12 min-h-11/12 m-5 mx-auto bg-slate-400 text-gray-800">
      <tbody>
        <tr className="text-left border-b-2 border-gray-300 text-xl">
          <th className=" text-center">NO</th>
          <th className="">KODEUNIK</th>
          <th className="px-2 py-1">VOUCHER</th>
          <th className="px-2 py-1">UID/NOMOR</th>
          <th className="px-2 py-1">HARGA</th>
          <th className="px-2 py-1">VARIASI</th>
          <th className="px-2 py-1">STATUS</th>
          <th className="px-2 py-1">TANGGAL</th>
          <th className="px-2 py-1">EDIT</th>
        </tr>
        {orders.length === 0
          ? null
          : orders.map((order, index) => {
              const { _id, uid, jenis, variasi, harga, status, createdAt } = order
              return (
                <tr key={index} className="bg-gray-100 border-b border-gray-200 text-base">
                  <td className="text-center">{index + 1}</td>
                  <td className="p-1">{_id}</td>
                  <td className="p-1">{jenis}</td>
                  <td className="p-1">{uid}</td>
                  <td className="p-1">{harga}</td>
                  <td className="p-1">{variasi}</td>
                  <td className="p-1">{status}</td>
                  <td className="p-1">{createdAt.toString()}</td>
                  <td className="p-1">
                    <button
                      onClick={() => {
                        alert(_id)
                        navigate('/dashboard/update')
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                    </button>
                  </td>
                </tr>
              )
            })}
      </tbody>
    </table>
  )
}

export default Table
