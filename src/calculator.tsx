import { useState } from "react";
import "./calculator.css";

function Calculator() {
  // skapa:

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
        <div className="tipBtnContainer">
          <button className="percentBtn" onClick={handleTipClick(5)}>
            5%
          </button>
          <button className="percentBtn" onClick={handleTipClick(10)}>
            10%
          </button>
          <button className="percentBtn" onClick={handleTipClick(15)}>
            15%
          </button>
          <button className="percentBtn" onClick={handleTipClick(25)}>
            25%
          </button>
          <button className="percentBtn" onClick={handleTipClick(50)}>
            50%
          </button>
          <button className="percentBtn" onClick={handleTipClick(0)}>
            Custom
          </button>
        </div>
        <input
          className="amountInput"
          type="number"
          value={numberOfPeople}
          placeholder="Enter number of people"
          onChange={handleAmountOfPeople}
        />
      </div>
      <div className="resultContainer">
        <h2 className="tipAmount">Tip Amount /person:</h2>
        <p>{tipAmount}/person</p>

        <h2 className="totalAmount">Total amount/person:</h2>
        <p>{totalAmount}/person</p>

        <button className="resetBtn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Calculator;
