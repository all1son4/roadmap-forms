import React from "react";
import "./Radio.css"

function Radio({placeholder, className, register, onClick = null,}) {
  return (
    <div className={`radio-wrapper ${className}`}>
      <label className={"radio"}>
        <input type="radio" {...register} value={placeholder}/>
        <div className={"radio__mark"} onClick={onClick}/>
      </label>
      <p className={"radio__placeholder"}>{placeholder}</p>
    </div>
  )
}

export default Radio