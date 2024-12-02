import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Result from "./components/Result.jsx";

function App() {
  const [inputValue, setInputValue] = useState({});

  function inputChangeHandler(objectKey, input) {
    setInputValue((prevInput) => {
      const updatedValue = {
        ...prevInput,
        [objectKey]: +parseFloat(input),
      };
      return updatedValue;
    });
  }

  const inputIsValid = inputValue.duration >= 1;

  return (
    <main>
      <section id="user-input">
        <div className="input-group">
          <UserInput
            label="Initial Investment"
            onInputChange={inputChangeHandler}
            objectKey="initialInvestment"
          />
          <UserInput
            label="Annual Investment"
            onInputChange={inputChangeHandler}
            objectKey="annualInvestment"
          />
        </div>
        <div className="input-group">
          <UserInput
            label="Expected Return"
            onInputChange={inputChangeHandler}
            objectKey="expectedReturn"
          />
          <UserInput
            label="Duration"
            onInputChange={inputChangeHandler}
            objectKey="duration"
          />
        </div>
      </section>
      {inputIsValid && <Result investments={inputValue} />}
      {!inputIsValid && <p className="center">Please insert valid input</p>}
    </main>
  );
}

export default App;
