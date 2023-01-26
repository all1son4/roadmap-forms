import React from "react";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import HookForm from "./components/React-hook-form";
import FormikForm from "./components/FormikForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
     <Route path={"/reactHookForm"} element={ <HookForm/>} />
      <Route path={"/formik"} element={ <FormikForm/>} />
    </Routes>
  )
}

export default App;
