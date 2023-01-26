import './App.css';
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Checkbox from "./Checkbox/Checkbox";
import Radio from "./Radio/Radio";

function App() {
  const { register, handleSubmit } = useForm();
  const [submitState, setSubmitState] = useState({})
  const [completeFirstStep, setCompleteFirstStep] = useState(false)
  const [completeSecondStep, setCompleteSecondStep] = useState(false)
  const [error, setError] = useState(false)
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

  if (submitState.firstStep) {
    console.log(Object.entries(submitState?.firstStep).filter(value => value[1] === true))
  }

  return (
    <div className={"wrapper"}>
      {!completeFirstStep &&
      <form onSubmit={handleSubmit(onNextStep)} className={"form"}>
        <h2 className={"form__title"}>Step #1</h2>
        <p className={"form__text"}>Please choose the answers:</p>
        <Checkbox placeholder={"The first answer"}
                  className={"checkbox-add"}
                  register={register("firstCheckbox")}/>
        <Checkbox placeholder={"The second answer"}
                  className={"checkbox-add"}
                  register={register("secondCheckbox")}/>
        <Checkbox placeholder={"The third answer"}
                  className={"checkbox-add"}
                  register={register("thirdCheckbox")}/>
        <Checkbox placeholder={"The fourth answer"}
                  className={"checkbox-add"}
                  register={register("fourthCheckbox")}/>
        <Checkbox placeholder={"The fifth answer"}
                  className={"checkbox-add"}
                  register={register("fifthCheckbox")}/>
        <button className={"form__button"} type="submit">Next question</button>
      </form>}

      {completeFirstStep && !completeSecondStep &&
      <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
        <h2 className={"form__title"}>Step #2</h2>
        <p className={"form__text"}>Please choose you country:</p>
        <Radio className={"radio-add"}
               register={register("country")}
               placeholder={"Belarus"}
               onClick={() => {setError(false)}}/>
        <Radio className={"radio-add"}
               register={register("country")}
               placeholder={"Georgia"}
               onClick={() => {setError(false)}}/>
        <Radio className={"radio-add"}
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
    </div>
  );
}

export default App;
