// Business Logic
let secret = prompt("Tell us a secret:")

function capitalizeLetters(string) {
  return (string.charAt(0) + string.charAt(string.length - 1)).toUpperCase();
}

function reverseLetters(string) {
  return (string.charAt(string.length - 1) + string.charAt(0)).toUpperCase();
}


function reverse(string) {
  return string.split("").reverse().join("");
}

function lastLetter(string) {
  return (string.charAt(string.length / 2));
}

function cipher(string) {
  console.log(string);
  console.log(capitalizeLetters(string));
  console.log(secret.concat(reverseLetters(string)));
  console.log(lastLetter(string).concat(secret.concat(reverseLetters(string))));
  console.log(reverse(lastLetter(string).concat(secret.concat(reverseLetters(string)))));
}

// cipher(secret);

// UI Logic
$(document).ready(function() {
  
  cipher(secret);

  $(.original).click(function())
});