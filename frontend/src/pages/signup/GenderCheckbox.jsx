// import React from 'react'

import { useState } from "react";

export default function GenderCheckbox(onCheckboxChange, selectedGender) {
  const [checkbox, setCheckbox] = useState({
    male: false,
    female: false,
  });

  function handleCheckboxChange(value) {
    console.log(value);
    setCheckbox({
      ...checkbox,
      [value]: !checkbox[value],
    });
    onCheckboxChange(value);
  }
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
            checked={checkbox.male}
            // checked={selectedGender === "male"}
            // checked={true}
            onChange={() => handleCheckboxChange("male")}
            // onChange={(e) =>
            //   console.log(e.target.value === "on" ? "checked" : "disabled")
            // }
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
            checked={checkbox.female}
            className="checkbox border-slate-900"
            // checked={selectedGender === "female"}
            onChange={() => handleCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}
