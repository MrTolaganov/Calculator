const numbers = document.querySelectorAll(".number"),
  operators = document.querySelectorAll(".operator"),
  inputVal = document.querySelector(".input-value"),
  equality = document.querySelector(".equality"),
  clear = document.querySelector(".clear"),
  numbersArr = [];

let inputNum = 0;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    numbersArr.push(+e.target.value);
    if (inputVal.textContent !== "0") {
      inputVal.textContent += e.target.textContent;

    } else {
      inputVal.textContent = e.target.textContent;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputVal.textContent += e.target.textContent;

  });
  
});

clear.addEventListener("click", () => {
  inputVal.textContent = "0";
});

equality.addEventListener("click", () => {
    
})