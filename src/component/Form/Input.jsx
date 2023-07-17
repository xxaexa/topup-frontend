const Input = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div>
      <label htmlFor={name}></label>
      <input type={type} value={value} name={name} onChange={handleChange} className="w-full rounded-xl text-black p-1  bg-slate-400 mb-4 bg-opacity-20 my-2" />
    </div>
  )
}

export default Input
