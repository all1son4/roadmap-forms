import {useForm} from "react-hook-form";
import React, {useState} from "react";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";
import './index.css'
import Button from "@mui/material/Button";
import {useNavigate} from "react-router";

function HookForm () {
  const { register, handleSubmit } = useForm();
  const [submitState, setSubmitState] = useState({})
  const [completeFirstStep, setCompleteFirstStep] = useState(false)
  const [completeSecondStep, setCompleteSecondStep] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const onNextStep = (data) => {
    setSubmitState({firstStep: data})
    setCompleteFirstStep(true)
  };

  const onSubmit = (data) => {
    if (data.country !== null) {
      setSubmitState(prevState => ({...prevState, secondStep: {country: data.country}}))
      setError(false)
      setCompleteSecondStep(true)
    } else {
      setError(true)
    }
  }

  return (
    <div className={"wrapper"}>
      {!completeFirstStep &&
      <form onSubmit={handleSubmit(onNextStep)} className={"form"}>
        <h2 className={"form__title"}>Step #1</h2>
        <p className={"form__text"}>Please choose the answers:</p>
        <Checkbox placeholder={"The first answer"}
                  type={"hook"}
                  className={"checkbox-add"}
                  register={register("firstCheckbox")}/>
        <Checkbox placeholder={"The second answer"}
                  type={"hook"}
                  className={"checkbox-add"}
                  register={register("secondCheckbox")}/>
        <Checkbox placeholder={"The third answer"}
                  type={"hook"}
                  className={"checkbox-add"}
                  register={register("thirdCheckbox")}/>
        <Checkbox placeholder={"The fourth answer"}
                  type={"hook"}
                  className={"checkbox-add"}
                  register={register("fourthCheckbox")}/>
        <Checkbox placeholder={"The fifth answer"}
                  type={"hook"}
                  className={"checkbox-add"}
                  register={register("fifthCheckbox")}/>
        <button className={"form__button"} type="submit">Next question</button>
      </form>}

      {completeFirstStep && !completeSecondStep &&
      <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
        <h2 className={"form__title"}>Step #2</h2>
        <p className={"form__text"}>Please choose you country:</p>
        <Radio className={"radio-add"}
               type={"hook"}
               register={register("country")}
               placeholder={"Belarus"}
               onClick={() => {setError(false)}}/>
        <Radio className={"radio-add"}
               type={"hook"}
               register={register("country")}
               placeholder={"Georgia"}
               onClick={() => {setError(false)}}/>
        <Radio className={"radio-add"}
               type={"hook"}
               register={register("country")}
               placeholder={"Kazakhstan"}
               onClick={() => {setError(false)}}/>
        {error && <span className={"radio__error"}>Please choose one of the options</span>}
        <button className={"form__button submit"} type="submit">Submit form</button>
      </form>}

      {completeFirstStep && completeSecondStep &&
      <section className={"final"}>
        <h2 className={"final__title"}>Congratulations!</h2>
        <p>You are from <strong>{submitState?.secondStep?.country}</strong> and you have chosen:
          {submitState?.firstStep && Object.entries(submitState?.firstStep).filter(value => value[1] === true).map((check) => {
            return (
              <strong key={check[0]}> {check[0]}</strong>
            )
          })}.</p>
      </section>}

      {completeFirstStep && completeSecondStep &&
      <Button variant={"contained"}
              color={'success'}
              onClick={() => {
                window.location.reload()
              }}
              style={{marginBottom: '20px'}}>Fill again</Button>}

      <Button variant={"contained"} onClick={() => {navigate("/")}}>Back to Home</Button>
    </div>
  );
}

export default HookForm