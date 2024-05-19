// import React from 'react'

// import { useState } from "react";

export default function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  // const [checkbox, setCheckbox] = useState([]);
  // function handleCheckboxChange(value) {
  //   if (checkbox.includes(value)) {
  //     setCheckbox(checkbox.filter((x) => x !== value));
  //   } else {
  //     setCheckbox([...checkbox, value]);
  //   }
  //   // onCheckboxChange(value);
  //   console.log(value);
  // }
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            className="checkbox border-slate-900"
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}
