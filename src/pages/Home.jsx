import { useState } from "react";
import Admin from "./Admin";
import User from "./User"

function Home() {
  const [sector, setSector] = useState("")

  /* ฟังก์ชั่นแสดง component ตาม sector ที่เลือก */
  const sectorComponent = () => {
    if (sector === "Admin") return <Admin />;
    if (sector === "User") return <User />
  }

  return (
    <div>
      <div className="text-center text-4xl font-bold m-8">
        <h1>Generation Thailand</h1>
        <h1>
        {sector === "" ? "React - Assignment" :
            `Home - ${sector} Sector`
        }
        </h1>
      </div>

      {/* สร้างปุ่มเพื่อเลือก sector */}
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

        {/* แสดง component ตาม sector ที่เลือก */}
        {sectorComponent()}

    </div>
  )
}

export default Home