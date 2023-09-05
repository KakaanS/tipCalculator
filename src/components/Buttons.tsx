import React from "react";

interface ButtonProps {
  handleTipClick: (percent: number) => () => void;
  customTip: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Buttons({ handleTipClick, customTip }: ButtonProps) {
  return (
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
      <input
        className="customInput"
        onChange={customTip}
        placeholder="custom"
      />
    </div>
  );
}

export default Buttons;
