import { useState } from 'react'
import { Button, Input } from './Form/index'

const FormLoginRegister = () => {
  const initialState = {
    name: '',
    role: '',
    username: '',
    password: '',
  }

  const [users, setUsers] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUsers({ ...users, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, role, username, password } = users

    if (!name || !role || !username || !password) {
      alert('Isi Semua Ygy')
      return
    } else {
      console.log(users)
    }
    setUsers(initialState)
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="rounded-xl border-2 bg-slate-300 bg-opacity-70 p-12">
          <p className="text-2xl text-center font-semibold">REGISTER</p>
          {/* NAME */}
          <p className="text-xl text-center font-semibold">NAME</p>
          <Input type={'text'} name={'name'} value={users.name} handleChange={handleChange} />

          {/* ROLE */}
          <p className="text-xl text-center font-semibold">ROLE</p>
          <Input type={'text'} name={'role'} value={users.role} handleChange={handleChange} />

          {/* USERNAME */}
          <p className="text-xl text-center font-semibold">USERNAME</p>
          <Input type={'text'} name={'username'} value={users.username} handleChange={handleChange} />

          {/* PASSWORD */}
          <p className="text-xl text-center font-semibold">PASSWORD</p>
          <Input type={'password'} name={'password'} value={users.password} handleChange={handleChange} />

          {/* SUBMIT BUTTON */}
          <Button text={'SUBMIT'} />
        </div>
      </form>
    </div>
  )
}

export default FormLoginRegister
