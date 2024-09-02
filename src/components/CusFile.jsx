import React from 'react'

function CusFile({setFormData,value}) {
  return (
    <div>
        <div className="flex flex-row items-center">
        <input
          type="file"
          id="custom-input"
          onChange={setFormData}
          hidden
        />
        <label
          htmlFor="custom-input"
          className="block text-sm  mr-4 py-2 px-4
            rounded-md border-0  font-semibold bg-pink-50
            text-pink-700 hover:bg-pink-100 cursor-pointer"
        >
          Choose file
        </label>
        <label className="text-sm text-slate-500">{value}</label>
      </div>
    </div>
  )
}

export default CusFile