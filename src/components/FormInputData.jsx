import { useState } from 'react';

function FormInputData({createData}) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createData(name, lastname, position);

    setName("");
    setLastname("");
    setPosition("");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Create user here</h1>
      <form className="flex w-full py-4 gap-4 justify-center">
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
