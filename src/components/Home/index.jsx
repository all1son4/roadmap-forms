import React from "react";
import {Button} from "antd";
import {useNavigate} from "react-router";
import './index.css'

function Home() {
  const navigate = useNavigate()
  return (
    <div className={"home"}>
      <h1 className={"home__title"}>Welcome to Forms</h1>
      <div className={"home__buttons"}>
        <Button onClick={() => {navigate("/reactHookForm")}}>React-hook-form variant</Button>
        <Button onClick={() => {navigate("/formik")}}>Formik variant</Button>
      </div>
    </div>
  )
}

export default Home