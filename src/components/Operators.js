import './Operators.css';

const Operators = () => {
  const OperatorsArr = ['÷','×','-','+','='];
  return (
    <div className="operatorsArea">
      {OperatorsArr.map((operator) => {
        return <button key={operator}>{operator}</button>;
      })}
    </div>
  );

};

export default Operators;
