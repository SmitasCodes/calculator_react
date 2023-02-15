import InputDisplay from "../InputDisplay";

const addValues = (values) => {
  let Input = document.querySelector(".inputDisplayArea_input");
  switch (values) {
    case "C":
      Input.value = "";
      break;
    case "√":
      let root = Math.sqrt(Input.value);
      Input.value = root;
      break;
    case "×2":
      let square = Math.pow(Input.value,2);
      Input.value = square;
      break;
    case '÷':
      
    default:
      Input.value += values;
      break;
  }
};

export default addValues;
