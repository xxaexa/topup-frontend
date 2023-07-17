import React from 'react'
import Button from '../component/Form/Button'
import Input from '../component/Form/Input'
const FormUpdate = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h2 className="text-xl uppercase">Update</h2>
      <form>
        <p className="text-xl text-center font-semibold">NAME</p>
        <Input type={'text'} name={'name'} />
        <Input type={'text'} name={'name'} />
        <Input type={'text'} name={'name'} />
        <Input type={'text'} name={'name'} />
        <Button text={'Edit'} />
      </form>
    </div>
  )
}

export default FormUpdate
