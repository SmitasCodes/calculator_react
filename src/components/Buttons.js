import './Buttons.css'
import addValues from './utils/addValues.js'

export const ButtonsArr = [
  'C','√','×2','/','7','8','9','*','4','5','6','-','1','2','3','+','±','0','.','='
];

export const Buttons = () => {

  return (
    <div className="buttonsArea">
      {ButtonsArr.map((btn) => {
        return <button key={btn} onClick={()=>{addValues(btn)}}>{btn}</button>;
      })}
    </div>
  );
};

