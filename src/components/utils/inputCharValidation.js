const inputCharValidation = (btns) => {
  const myInput = document.querySelector(".inputDisplayArea_input");
  if(myInput){
    myInput.addEventListener("keydown", (event) => {
        const keyPressed = event.key;
    
        if (keyPressed !== 'Backspace' && !btns.includes(keyPressed)) {
          event.preventDefault();
        }
      });
  }
  
};

export default inputCharValidation;
