let string1 = "hello";
let string2 = "world";

console.log(string1 + " is equal to 'hello': " + isEqualToHello(string1)); 
console.log(string2 + " is equal to 'hello': " + isEqualToHello(string2)); 

function isEqualToHello(str) {
    return str === "hello";
  }