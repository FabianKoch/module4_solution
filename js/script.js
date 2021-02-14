// should be undefined
var x;
console.log(x);

/*you can test against the keyword "undefined"*/
if (x == undefined) {
    console.log("x is undefined");
}

x = 5;
if (x == undefined) {
    console.log("x is undefined");
}
else {
    console.log("x has been defined");
}

