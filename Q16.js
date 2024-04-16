  let string1 = "hello";
  let string2 = "world";
  
  console.log(string1 + " contains 'a' or 'b': " + containsAOrB(string1)); 
  console.log(string2 + " contains 'a' or 'b': " + containsAOrB(string2)); 
  
  function containsAOrB(str) {
    return str.includes("a") || str.includes("b");
  }
  
 