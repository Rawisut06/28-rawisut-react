import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="text-xl font-bold border-b-2 border-slate-900 mx-4">
        <ul className="flex justify-end pr-8">
          <li className="hover:text-white hover:bg-slate-900 p-4"><Link to='/'>Home</Link></li>
          <li className="hover:text-white hover:bg-slate-900 p-4"><Link to='/Owner'>Owner</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar