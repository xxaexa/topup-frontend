const Variasi = ({ value, handleChange, text, price, handleClickPrice }) => {
  return (
    <label className="cursor-pointer">
      <input type="radio" className="peer sr-only" name="variasi" value={value} onChange={handleChange} data-price={price} onClick={handleClickPrice} />
      <div className="my-2 mx-auto w-full  rounded-xl text-black p-1 bg-slate-400 transition-all checked:bg-black peer-checked:text-slate-200 peer-checked:bg-opacity-70">{text}</div>
    </label>
  )
}

export default Variasi
