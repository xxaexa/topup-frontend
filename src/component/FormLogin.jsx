import { useState } from 'react'
import { Button, Input } from './Form/index'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const FormLoginRegister = () => {
  const navigate = useNavigate()
  const initialState = {
    username: '',
    password: '',
  }

  const [user, setUser] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = user
    console.log(user)
    if (!username || !password) {
      toast.error('Jangan ada yang kosong')
      return
    } else {
      navigate('/dashboard')
      toast.success('Halo Demo')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="rounded-xl border-2 bg-slate-300 bg-opacity-70 p-12">
          {/* USERNAME */}
          <p className="text-xl text-center font-semibold">USERNAME</p>
          <Input type={'text'} name={'username'} value={user.username} handleChange={handleChange} />

          {/* PASSWORD */}
          <p className="text-xl text-center font-semibold">PASSWORD</p>
          <Input type={'password'} name={'password'} value={user.password} handleChange={handleChange} />

          {/* SUBMIT BUTTON */}
          <Button text={'LOGIN'} />
          <p className="text-center">
            LUPA PASSWORD
            <br /> JAPRI OWNER
          </p>
        </div>
      </form>
    </div>
  )
}

export default FormLoginRegister
