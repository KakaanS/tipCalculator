import { useState } from "react";

import Results from "./results";
import Buttons from "./Buttons";
import "./calculator.css";

function Calculator() {
  const [amount, setAmount] = useState<number | string>("");
  const [tipPercent, setTipPercent] = useState<number | string>(0);
  const [numberOfPeople, setAmountOfPeople] = useState<number | string>("");
  const [tipAmount, setTipAmount] = useState<number | string>(0);
  const [totalAmount, setTotalAmount] = useState<number | string>(0);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleTipClick = (percent: number) => () => {
    setTipPercent(percent);
    calculateTip(amount, percent, numberOfPeople);
  };

  const handleAmountOfPeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountOfPeople(e.target.value);
    calculateTip(amount, tipPercent, e.target.value);
  };

  const customTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipPercent(e.target.value);
    calculateTip(amount, e.target.value, numberOfPeople);
  };

  const calculateTip = (
    amount: number | string,
    tipPercent: number | string,
    numberOfPeople: number | string
  ) => {
    const tip = (Number(amount) * Number(tipPercent)) / 100;
    const total = Number(amount) + tip;
    const tipPerPerson = tip / Number(numberOfPeople);
    const totalPerPerson = total / Number(numberOfPeople);
    setTipAmount(tipPerPerson);
    setTotalAmount(totalPerPerson);
  };

  const handleReset = () => {
    setAmount("");
    setTipPercent(0);
    setAmountOfPeople("");
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <div>
      <div className="calculatorContainer">
        <h1 className="title">Calculator</h1>
        <input
          className="amountInput"
          value={amount}
          type="number"
          placeholder="Enter amount"
          onChange={handleAmountChange}
        />
        <Buttons customTip={customTip} handleTipClick={handleTipClick} />
        <input
          className="amountInput"
          type="number"
          value={numberOfPeople}
          placeholder="Enter number of people"
          onChange={handleAmountOfPeople}
        />
      </div>
      <div>
        <Results
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default Calculator;
