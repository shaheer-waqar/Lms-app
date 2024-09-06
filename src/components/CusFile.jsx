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
            rounded-md border-0  font-semibold bg-blue-50
            text-blue-700 hover:bg-blue-100 cursor-pointer focus:outline-blue-600"
        >
          Choose file
        </label>
        <label className="text-sm text-slate-500">{value}</label>
      </div>
    </div>
  )
}

export default CusFile