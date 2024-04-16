  let num1 = 10;
  let num2 = -5;
  let num3 = 0;
  
  console.log(num1 + " is " + checkNumberSign(num1)); 
  // Output: 10 is Positive
  console.log(num2 + " is " + checkNumberSign(num2)); 
  // Output: -5 is Negative
  console.log(num3 + " is " + checkNumberSign(num3)); 
  // Output: 0 is Zero

  function checkNumberSign(number) {
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  