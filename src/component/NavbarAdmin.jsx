import { useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
  }
  return (
    <nav className="shadow-lg shadow-slate-500/50 bg-slate-300 bg-opacity-30">
      <div className="flex justify-between md:h-14">
        <div className=" overflow-hidden md:overflow-visible duration-700" ref={linksContainerRef} style={linkStyles}>
          <ul className="space-y-4 duration-500 md:space-y-0 md:flex md:space-x-4 p-4 uppercase text-xl tracking-wider" ref={linksRef}>
            <li className="">HOME</li>
            <li>PENJUALAN</li>
          </ul>
        </div>
        {/* social links */}
        <div className="hidden md:inline h-auto">
          <ul className="flex space-x-4 p-4 ">
            <li>
              <Link to={'/login'}>LOGOUT</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden p-4">
          <button className="nav-toggle hover:rotate-90 duration-500 ease-in-out " onClick={toggleLinks}>
            <FaBars className="text-3xl mx-1 hover:text-slate-400  ease-in-out duration-500" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
