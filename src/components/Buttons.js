import './Buttons.css'
import addValues from './utils/addValues.js'

const Buttons = () => {
  const ButtonsArr = [
    'C','√','×2','7','8','9','4','5','6','1','2','3','±','0','.'
  ];

  return (
    <div className="buttonsArea">
      {ButtonsArr.map((btn) => {
        return <button key={btn} onClick={()=>{addValues(btn)}}>{btn}</button>;
      })}
    </div>
  );
};

export default Buttons;
