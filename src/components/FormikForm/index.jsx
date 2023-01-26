import React, {useState} from "react";
import {Form, Formik} from "formik";
import Checkbox from "../Checkbox/Checkbox";
import "./index.css"
import {useNavigate} from "react-router";
import Radio from "../Radio/Radio";
import {Button} from "reactstrap";


function FormikForm() {
  const [submitState, setSubmitState] = useState({})
  const [completeFirstStep, setCompleteFirstStep] = useState(false)
  const [completeSecondStep, setCompleteSecondStep] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const onNextStep = (values) => {
    setSubmitState({firstStep: values})
    setCompleteFirstStep(true)
  };

  const onSubmit = (values) => {
    console.log(values)
    if (values.country !== null) {
      setSubmitState(prevState => ({...prevState, secondStep: {country: values.country}}))
      setError(false)
      setCompleteSecondStep(true)
    } else {
      setError(true)
    }
  }

  return (
    <div className={"wrapper"}>
      {!completeFirstStep &&
      <section className={"formik__wrapper"}>
        <h2 className={"form__title"}>Step #1</h2>
        <p className={"formik__text"}>Please choose the answers:</p>
        <Formik
          initialValues={{
            firstCheckbox: false,
            secondCheckbox: false,
            thirdCheckbox: false,
            fourthCheckbox: false,
            fifthCheckbox: false
          }}
          onSubmit={onNextStep}>
          <Form>
            <Checkbox placeholder={"The first answer"}
                      type={"formik"}
                      name={"firstCheckbox"}
                      className={"checkbox-add"}/>
            <Checkbox placeholder={"The second answer"}
                      type={"formik"}
                      name={"secondCheckbox"}
                      className={"checkbox-add"}/>
            <Checkbox placeholder={"The third answer"}
                      type={"formik"}
                      name={"thirdCheckbox"}
                      className={"checkbox-add"}/>
            <Checkbox placeholder={"The fourth answer"}
                      type={"formik"}
                      name={"fourthCheckbox"}
                      className={"checkbox-add"}/>
            <Checkbox placeholder={"The fifth answer"}
                      type={"formik"}
                      name={"fifthCheckbox"}
                      className={"checkbox-add"}/>
            <button className={"form__button"} type="submit">Next question</button>
          </Form>
        </Formik>
      </section>}
      {completeFirstStep && !completeSecondStep &&
      <section className={"formik__wrapper"}>
        <h2 className={"form__title"}>Step #2</h2>
        <p className={"formik__text"}>Please choose you country:</p>
        <Formik
          initialValues={{
            country: null
          }}
          onSubmit={onSubmit}>
          <Form>
            <Radio className={"radio-add"}
                   placeholder={"Belarus"}
                   type={"formik"}
                   onClick={() => {
                     setError(false)
                   }}/>
            <Radio className={"radio-add"}
                   placeholder={"Georgia"}
                   type={"formik"}
                   onClick={() => {
                     setError(false)
                   }}/>
            <Radio className={"radio-add"}
                   placeholder={"Kazakhstan"}
                   type={"formik"}
                   onClick={() => {
                     setError(false)
                   }}/>
            {error && <span className={"radio__error"}>Please choose one of the options</span>}
            <button className={"form__button"} type="submit">Submit form</button>
          </Form>
        </Formik>
      </section>}

      {completeFirstStep && completeSecondStep &&
      <section className={"final formik__wrapper"}>
        <h2 className={"final__title"}>Congratulations!</h2>
        <p>You are from <strong>{submitState?.secondStep?.country}</strong> and you have chosen:
          {submitState?.firstStep && Object.entries(submitState?.firstStep).filter(value => value[1] === true).map((check) => {
            return (
              <strong key={check[0]}> {check[0]}</strong>
            )
          })}.</p>
      </section>}

      {completeFirstStep && completeSecondStep &&
      <Button type={"button"}
              color={"success"}
              outline
              onClick={() => {
                window.location.reload()
              }}
              style={{marginBottom: '20px'}}>Fill again</Button>}

      <Button type={"button"}
              color={"primary"}
              onClick={() => {navigate("/")}}>Back to Home</Button>
    </div>
  )
}

export default FormikForm