function lvl1exercise1 () {
    var testVar;
    return testVar;
  // Declare a variable without instantiating it and return it!

}

function lvl1exercise2 () {
    var testVar = 1;
    return testVar;
  // Declare and instantiate a number and return it

}

function lvl1exercise3 () {
    var testVar = 0.5;
    return testVar;
  // Declare and instantiate a floating point number that is not a whole number and return it

}

function lvl1exercise4 () {
    var testStr = "Hello World!";
    return testStr
  // Declare and instantiate a string "Hello World!" and return it

}

function lvl1exercise5 () {
    var testArr = ['Hello World!', 4];
    return testArr
  // Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it

}

function lvl1exercise6 () {
    var testArr = {
        key1 : "Hello World!",
        key2 : 4,
    };
    return testArr
  // Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it

}

function lvl1exercise7 () {
    var testBool = false;
    return testBool
  // Declare and instantiate a boolean value 'false' and return it

}

for (var i=1; i < 8; i++) {
    console.log(eval("lvl1exercise" + i + '()'));
    
}