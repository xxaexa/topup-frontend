const Button = ({ text }) => {
  return (
    <button id="submitButton" type="submit" className="mx-auto block w-24 rounded-xl tracking-widest font-semibold bg-slate-400 p-1 m-2 text-black hover:opacity-70 hover:text-slate-200 transition-all">
      {text}
    </button>
  )
}

export default Button
