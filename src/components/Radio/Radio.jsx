import React from "react";
import "./Radio.css"
import {Field} from "formik";

function Radio({placeholder, className, register, onClick = null, type}) {
  return (
    <div className={`radio-wrapper ${className}`}>
      <label className={"radio"}>
        {type === "hook" && <input type="radio" {...register} value={placeholder}/>}
        {type === "formik" && <Field type={"radio"} name={"country"} value={placeholder}/>}
        <div className={"radio__mark"} onClick={onClick}/>
      </label>
      <p className={"radio__placeholder"}>{placeholder}</p>
    </div>
  )
}

export default Radio