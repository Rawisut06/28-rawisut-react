import { useState, useEffect } from 'react';
import axios from 'axios';
import FormInputData from '../components/FormInputData';

function Admin() {
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);

  const url = "https://jsd5-mock-backend.onrender.com";

  /* ดึงข้อมูล จาก api และนำมาเก็บใน state variable ที่ชื่อ employees และจะทำการ update ตารางใหม่ เมื่อ ค่า reload เปลี่ยน*/
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${url}/members`);
      setEmployees(response.data);
    }
    getData()
  }, [reload])

  /* สร้างข้อมูลขึ้นมาจาก props createdData จาก FormInputData component */
  const createData = async (name, lastname, position) => {
    const requestData = {
      name,
      lastname,
      position,
    }
    /* นำข้อมูลที่สร้างมา updated เข้าไป data api */
    const response = await axios.post(`${url}/members`, requestData);

    /* เช็ค status ถ้า api มัน response ให้เป็น state variable ที่ชื่อ reload เป็น true เพื่อให้ useEffect ทำการ getData ใหม่ ที่เราทำการสร้างข้อมูลไปแล้ว */
    if (response.status === 200) {
      setReload(!reload);
      console.log("Created successfully", response);
    }
  }


  /* ลบข้อมูล จาก api */
  const deleteData = async (id) => {
    const response = await axios.delete(`${url}/member/${id}`);

    /* เช็ค status ถ้า api มัน response ให้เป็น state variable ที่ชื่อ reload เป็น true เพื่อให้ useEffect ทำการ getData ใหม่ ที่เราทำการลบข้อมูลไปแล้ว */
    if (response.status === 200) {
      setReload(!reload);
      console.log("Deleted successfully", response);
    }
  }

  /* แสดงตารางให้ Admin */
  return (
    <div className="flex flex-col items-center">
      <FormInputData
        createData={createData}
      />
      <table className="w-[1000px] text-center max-md:w-full">
        <thead className="bg-slate-300">
          <tr>
            <th className="border-2 w-[25%]">Name</th>
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
                <td className="flex justify-center gap-2 border-2">
                  {/* เมื่อกดปุ่ม จะเรียกใช้งานฟังก์ชั่น deleteData */}
                  <button
                    className="text-red-500"
                    onClick={() => deleteData(employee.id)}
                  >
                    Delete
                  </button>
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