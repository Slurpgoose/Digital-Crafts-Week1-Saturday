function lvl3exercise1 () {
    str1 = "hello";
    str2 = "world";
    return str1 + str2
  // Create a "hello" and a "world", return the concatenation of the two

}

function lvl3exercise2 () {
    str1 = "hello";
    var2 = 12;
    return str1 + 12
  // Create a "hello" and a 12, return the concatenation of the two

}

function lvl3exercise3 () {
    var1 = 12;
    return var1.toString()
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.

}

function lvl3exercise4 () {
    str1 = "hello world!";
    return str1.length
  // Create a "hello world!" string. Return the length of the string

}

function lvl3exercise5 () {
    str1 = "hello world!";
    return str1.indexOf("world")
  // Create a "hello world!" string. Return the index of the word "world".

}


for (var i=1; i < 6; i++) {
    console.log(eval("lvl3exercise" + i + '()'));
    
}
