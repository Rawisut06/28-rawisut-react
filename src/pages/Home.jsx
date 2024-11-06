import axios from "axios"
import { useEffect, useState } from "react"
import Admin from "./Admin";
import User from "./User"

function Home() {
  const [sector, setSector] = useState("")
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://jsd5-mock-backend.onrender.com/members");
      setEmployees(response.data);
    }
    getData()
  })

  const sectorComponent = () => {
    if (sector === "Admin") return <Admin />;
    if (sector === "User") return <User />
  }

  return (
    <div>
      <div className="text-center text-4xl font-bold m-8">
        <h1>Generation Thailand</h1>
        <h1>
        {sector === "" ? "React - Assignment" : (
            `Home - ${sector} Sector`
          )}
        </h1>
      </div>
      <div className="flex p-4 gap-4 justify-center m-8">
        <button
          className={`p-4 rounded-xl hover:bg-slate-900 hover:text-white ${sector === "User" ? "bg-slate-900 text-white" : "bg-slate-300"}`}
          onClick={() => setSector("User")}
        >
          User Home Sector
        </button>
        <button
          className={`p-4 rounded-xl hover:bg-slate-900 hover:text-white ${sector === "Admin" ? "bg-slate-900 text-white" : "bg-slate-300"}`}
          onClick={() => setSector("Admin")}
        >
          Admin Home Sector
        </button>
      </div>
    </div>
  )
}

export default Home