import { Dashboard, Error, Landing, Login, Register, FormUpdate } from './page/'
import { Route, Routes } from 'react-router-dom'
import { Aov, Valorant, FF, Gi, Mlbb, PUBG } from './page/voucher/index'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/voucher/aov" element={<Aov />} />
      <Route path="/voucher/free-fire" element={<FF />} />
      <Route path="/voucher/genshin-impact" element={<Gi />} />
      <Route path="/voucher/mobile-legend" element={<Mlbb />} />
      <Route path="/voucher/pubg" element={<PUBG />} />
      <Route path="/voucher/valorant" element={<Valorant />} />

      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App

// <Route path="/login" element={<Login />} />
//  <Route path="/register" element={<Register />} />
// <Route path="/dashboard" element={<Dashboard />}>
{
  /* <Route path="/dashboard/update" element={<FormUpdate />} /> */
}
