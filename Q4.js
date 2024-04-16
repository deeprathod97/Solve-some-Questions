  let num1 = 10;
  let num2 = 20;
  let num3 = 30;
  let average = calculateAverage(num1, num2, num3);
  console.log("The average of the three numbers is: " + average);
  
  function calculateAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum / 3;
  }