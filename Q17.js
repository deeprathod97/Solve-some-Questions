  let num1 = -5;
  let num2 = 50;
  let num3 = 150;
  
  console.log(num1 + " is out of range: " + isOutOfRange(num1)); 
  console.log(num2 + " is out of range: " + isOutOfRange(num2)); 
  console.log(num3 + " is out of range: " + isOutOfRange(num3)); 

  function isOutOfRange(number) {
    return number < 0 || number > 100;
  }
  
  