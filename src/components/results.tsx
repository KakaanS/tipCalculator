interface ResultsProps {
  tipAmount: string | number;
  totalAmount: string | number;
  handleReset: () => void;
}

function Results({ tipAmount, totalAmount, handleReset }: ResultsProps) {
  return (
    <div className="resultContainer">
      <h2 className="tipAmount">Tip Amount /person:</h2>
      <p>{tipAmount}/person</p>

      <h2 className="totalAmount">Total amount/person:</h2>
      <p>{totalAmount}/person</p>

      <button className="resetBtn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Results;
