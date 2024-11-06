import React from 'react'

function Owner() {
  return (
    <div className="flex flex-col text-center gap-4 items-center">
      <h1 className="text-2xl font-bold">Rawisut - Group E - 28</h1>
      <img
        className="w-[200px] h-[200px]"
        src="https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp" alt="ownerProfile"
      />
      <h2 className="text-xl font-bold">Short Biography</h2>
      <p className="max-w-[1000px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur possimus facere obcaecati adipisci tempora illum asperiores ea temporibus velit dolore esse similique, cumque animi assumenda iste distinctio corporis amet?</p>
    </div>
  )
}

export default Owner