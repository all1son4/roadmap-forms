import React from "react";
import "./Checkbox.css"

function Checkbox({placeholder, className, register}) {
  return (
    <div className={`checkbox-wrapper ${className}`}>
      <label className={"checkbox"}>
        <input type="checkbox" {...register}/>
        <div className={"checkbox__mark"}/>
        <div className={"checkbox__body"}/>
      </label>
      <p className={"checkbox__placeholder"}>{placeholder}</p>
    </div>
  )
}

export default Checkbox