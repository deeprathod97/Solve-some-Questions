  let num1 = 6;
  let num2 = 12;
  
  console.log(num1 + " is between 5 and 10: " + isBetweenFiveAndTen(num1)); 
  console.log(num2 + " is between 5 and 10: " + isBetweenFiveAndTen(num2)); 
  
  function isBetweenFiveAndTen(number) {
    return number > 5 && number < 10;
  }