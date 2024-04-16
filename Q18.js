  let num1 = 5;
  let num2 = 10;
  let num3 = 20;
  
  console.log(num1 + " is not equal to 10 or 20: " + isNotEqualTenOrTwenty(num1)); 
  console.log(num2 + " is not equal to 10 or 20: " + isNotEqualTenOrTwenty(num2)); 
  console.log(num3 + " is not equal to 10 or 20: " + isNotEqualTenOrTwenty(num3)); 
  

  function isNotEqualTenOrTwenty(number) {
    return number !== 10 || number !== 20;
  }
  
 