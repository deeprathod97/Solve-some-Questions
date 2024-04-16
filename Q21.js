  let year1 = 2024; 
  let year2 = 2023; 
  
  console.log(year1 + " is a leap year: " + isLeapYear(year1)); 
  // Output: 2024 is a leap year: true
  console.log(year2 + " is a leap year: " + isLeapYear(year2)); 
  // Output: 2023 is a leap year: false

  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true; 
    } else {
      return false; 
    }
  }
  