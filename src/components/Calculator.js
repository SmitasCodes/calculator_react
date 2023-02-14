import Buttons from './Buttons';
import Operators from './Operators'
import InputDisplay from './InputDisplay'
import './Calculator.css'

const Calculator = () => {
  return (
    <div className="calculator">
      <InputDisplay></InputDisplay>
      <Buttons></Buttons>
      <Operators></Operators>
    </div>
  );
};

export default Calculator;