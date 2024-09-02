import React from "react";

function CusRadio({ label, name, setFormData ,value}) {
  return (
    <div className="flex gap-2 items-center">
      <input type="radio" name={name} value={label} onChange={setFormData}
      checked={value == label}
       />
      <label className="text-sm" htmlFor="">
        {label}
      </label>
    </div>
  );
}

export default CusRadio;
