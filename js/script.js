// ***** String concatination

/*
var string = "Hello";
string += " World"; /!*Here we overwrite the variable strin*!/
string = string + " World"; /!*Does the same as the line above*!/
console.log(string + "!"); /!*Here the variable string stays the same and we add the "!"*!/
/!*will output "Hello World World!"*!/
*/



// ***** Regular math operators: +, -, *, /
/*
console.log((5 + 4) / 3);
console.log(undefined / 5);/!*will log NaN = "Not a Number"*!/
function test1 (a) {
    console.log( a / 5);
}
test1();
*/





/*
// ***** Equality expressed with "=="
var x = 4, y = 4;
if (x == y) {
    console.log("x=4 is equal to y=4");
}

/!*change the type of x to s string*!/
x = "4";
if (x == y) {
    console.log("x='4' is equal to y=4"); /!*they are still the same because JS changes the type to compare them*!/
}


// ***** Strict equality (useful to compare types too)
if (x === y) {
    console.log("Strict: x='4' is equal to y=4");
}
else {
    console
        .log("Strict: x='4' is NOT equal to y=4");/!*this will log*!/
}
*/



/*
// ***** If statement (all false; the || makes sure that the next value is checked if the left one is false)
if ( false || null ||
    undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute");
}
else {
    console.log ("All false");
}

// ***** If statement (all true; && logical AND operator: only returns true if the things left and right are true)
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}*/



// ***** Best practice for {} style
// Curly brace on the same or next line...
/*// Is it just a style?
/!*then the curly braces are not on the same line the function does not work*!/
function a()
{
    return
    {
        name: "Yaakov"
    };
}

function b() {
    return {
        name: "Yaakov"
    };
}

console.log(a());/!*this returns undefined*!/
console.log(b());*/

/*
// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(i);
    sum = sum + i;
   ;

}
console.log("This is the sum: " + sum)
*/



