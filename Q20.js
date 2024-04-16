
  let age1 = 19;
  let age2 = 16;
  
  console.log("Person with age " + age1 + " is " + checkVotingEligibility(age1)); 
  // Output: Person with age 20 is Eligible to Vote
  console.log("Person with age " + age2 + " is " + checkVotingEligibility(age2));
   // Output: Person with age 16 is Not Eligible to Vote
  


  function checkVotingEligibility(age) {
    if (age >= 18) {
      return "Eligible to Vote";
    } else {
      return "Not Eligible to Vote";
    }
  }
  
