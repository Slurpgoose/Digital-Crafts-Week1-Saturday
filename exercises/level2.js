function lvl2exercise1 (num1, num2) {
    return num1 + num2
  // Return the sum of num1 and num2

}

function lvl2exercise2 (num1, num2) {
    return num1 - num2
  // Return the difference of num1 and num2

}

function lvl2exercise3 (num1, num2) {
    return num1 * num2
  // Return the multiplication of num1 and num 2

}

function lvl2exercise4 (num1, num2) {
  // Return the division of num1 and num2
  return num1 / num2

}

function lvl2exercise5 (num1, num2) {
  // Add 2 to num1 using += and return it
  return num1 += 2;

}

var num1 = 1;
var num2 = 2;

for (var i=1; i < 6; i++) {
    console.log(eval(`lvl2exercise` + i + `(${num1}, ${num2})`));
    
}