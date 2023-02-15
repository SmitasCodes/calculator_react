import './Operators.css';
import addValues from './utils/addValues';

const Operators = () => {
  const OperatorsArr = ['÷','×','-','+','='];
  return (
    <div className="operatorsArea">
      {OperatorsArr.map((operator) => {
        return <button key={operator} onClick={()=>{addValues(operator)}}>{operator}</button>;
      })}
    </div>
  );

};

export default Operators;
