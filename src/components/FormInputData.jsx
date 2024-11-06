import { useState } from 'react';

/* สร้าง component กรอกข้อมูลใหม่ เข้าไปยัง createdData ที่เป็น props เพื่อส่งต่อไปยัง Admin component */
function FormInputData({createData}) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  /* สร้างฟังก๋ชั่น เมื่อกดปุ่ม Add ให้ทำข้อมูลจาก input ให้เป็น props ใน createdData เพื่อนำ createdData ไปยัง Admin component */
  const handleSubmit = (e) => {
    e.preventDefault();
    createData(name, lastname, position);

    /* เมื่อ input ค่าแล้ว ให้ทำการเปลี่ยน ค่า value input เป็น "" */
    setName("");
    setLastname("");
    setPosition("");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Create user here</h1>
      <form className="flex w-full py-4 gap-4 justify-center max-md:flex-col">
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
          className="py-2 px-4 bg-blue-500 rounded-md text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default FormInputData
