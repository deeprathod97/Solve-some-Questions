  let grade1 = 75; 
  let grade2 = 45; 
  
  console.log("Grade " + grade1 + " is " + isPassingGrade(grade1));
   // Output: Grade 75 is Passing
  console.log("Grade " + grade2 + " is " + isPassingGrade(grade2));
   // Output: Grade 45 is Failing

   function isPassingGrade(grade) {
    if (grade >= 60) {
      return "Passing";
    } else {
      return "Failing";
    }
  }
  

  
  