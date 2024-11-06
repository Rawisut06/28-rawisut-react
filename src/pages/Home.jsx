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
      <div className="text-center text-2xl font-bold">
        <h1>Generation Thailand</h1>
        <h1>
        {sector === "" ? "React - Assignment" : (
            `Home - ${sector} Sector`
          )}
        </h1>
      </div>
      <button onClick={() => setSector("User")}>User Home Sector</button>
      <button onClick={() => setSector("Admin")}>Admin Home Sector</button>
    </div>
  )
}

export default Home