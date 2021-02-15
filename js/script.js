// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
    return x * y;
}

/*we can set proprieties on functions because they are objects*/
multiply.version = "v.1.0.0";
console.log(multiply.version);


// Function factory
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };

    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));



// Passing functions as arguments --> "operation" is a function
function doOperationOn(x, operation) {
    return operation(x);/*the "()" invoke the function*/
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);


