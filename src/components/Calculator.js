import {Buttons} from "./Buttons";
import InputDisplay from "./InputDisplay";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="calculator">
      <InputDisplay/>
      <Buttons/>
    </div>
  );
};

export default Calculator;
