import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [employees, setEmployees] = useState([])
  const [reload, setReload] = useState(false)
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const url = "https://jsd5-mock-backend.onrender.com";

  /* ดึงข้อมูล จาก api และนำมาเก็บใน state variable ที่ชื่อ employees*/
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${url}/members`);
      setEmployees(response.data);
    }
    getData()
  }, [reload])

  const deleteData = async (id) => {
    const response = await axios.delete(`${url}/member/${id}`);

    if (response.status === 200) {
      setReload(!reload);
      console.log("Deleted successfully", response);
    }
  }

  const createData = async (name, lastname, position) => {
    const requestData = {
      name,
      lastname,
      position,
    }
    const response = await axios.post(`${url}/members`, requestData);

    if (response.status === 200) {
      setReload(!reload);
      console.log("Created successfully", response);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createData(name, lastname, position);

    setName("");
    setLastname("");
    setPosition("");
  }

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col w-full p-4 gap-4 justify-center">
        <h1 className="text-2xl font-bold">Create user here</h1>
        <input
          className="border border-slate-900 rounded-sm p-2"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          className="border border-slate-900 rounded-sm p-2"
          type="text"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
          placeholder="Enter last name"
        />
        <input
          className="border border-slate-900 rounded-sm p-2"
          type="text"
          value={position}
          onChange={e => setPosition(e.target.value)}
          placeholder="Enter position"
        />
        <button
          className="p-2 bg-blue-500 rounded-md text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
      <table className="w-full text-center">
        <thead className="bg-slate-300">
          <tr>
            <th className="border-2">Name</th>
            <th className="border-2">Last Name</th>
            <th className="border-2">Position</th>
            <th className="border-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-slate-100 border-2">
          {employees.map(employee => {
            return (
              <tr key={employee.id}>
                <td className="border-2">{employee.name}</td>
                <td className="border-2">{employee.lastname}</td>
                <td className="border-2">{employee.position}</td>
                <td>
                  <button onClick={() => deleteData(employee.id)}>Delete</button>
                </td>
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