$(document).ready(function() {
});
let secret = prompt("Tell us a secret:")

function capitalizeLetters(string) {
  return (string.charAt(0) + string.charAt(string.length - 1)).toUpperCase();
}

function reverseLetters(string) {
  return (string.charAt(string.length - 1) + string.charAt(0)).toUpperCase();
}

function cipher(string) {
  console.log(string);
  console.log(capitalizeLetters(string));
  console.log(secret.concat(reverseLetters(string)));
  console.log(lastLetter(string).concat(secret.concat(reverseLetters(string))));
}

function lastLetter(string) {
  return (string.charAt(string.length / 2));
}
// .concat(cipher(string))
cipher(secret);
// cipher2(secret);

// function capitalizeLastLetter(string) {  
//   return string.charAt(string.length-1).toUpperCase();
// }

// let secret = prompt("Tell us a secret:")
// console.log(secret);
// console.log(capitalizeLetters(secret));
// console.log(reverseLetters(secret));
// console.log(capitalizeLastLetter(secret));