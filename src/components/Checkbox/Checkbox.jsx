import React from "react";
import "./Checkbox.css"
import {Field} from "formik";

function Checkbox({placeholder, className, register, type, name}) {
  return (
    <div className={`checkbox-wrapper ${className}`}>
      <label className={"checkbox"}>
        {type === "hook" && <input type="checkbox" {...register}/>}
        {type === "formik" && <Field type="checkbox" name={name} />}
        <div className={"checkbox__mark"}/>
        <div className={"checkbox__body"}/>
      </label>
      <p className={"checkbox__placeholder"}>{placeholder}</p>
    </div>
  )
}

export default Checkbox