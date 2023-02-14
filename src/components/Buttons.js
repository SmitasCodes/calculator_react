import './Buttons.css'
const Buttons = () => {
  const ButtonsArr = [
    'C','√','×2','7','8','9','4','5','6','1','2','3','±','0','.'
  ];
  
  return (
    <div className="buttonsArea">
      {ButtonsArr.map((btn) => {
        return <button key={btn}>{btn}</button>;
      })}
    </div>
  );
};

export default Buttons;
