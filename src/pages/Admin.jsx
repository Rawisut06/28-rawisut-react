import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [employees, setEmployees] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://jsd5-mock-backend.onrender.com/members");
      setEmployees(response.data);
    }
    getData()
  }, [reload])

  return (
    <div className="flex flex-col items-center">
      <form>
        <input
          type="text"
        />
        <input
          type="text"
        />
        <input
          type="text"
        />
      </form>
      <table className="w-full text-center">
        <thead className="bg-slate-300">
          <tr>
            <th className="border-2">Name</th>
            <th className="border-2">Last Name</th>
            <th className="border-2">Position</th>
          </tr>
        </thead>
        <tbody className="bg-slate-100 border-2">
          {employees.map(employee => {
            return (
              <tr key={employee.id}>
                <td className="border-2">{employee.name}</td>
                <td className="border-2">{employee.lastname}</td>
                <td className="border-2">{employee.position}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Admin