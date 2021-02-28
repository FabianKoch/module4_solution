// Closures
function makeMultiplier (multiplier) {
    // var multiplier = 2;
    function b() {
        console.log("Multiplier is: " + multiplier);/*"multiplier" is not defined in the function so it goes outside to look for it*/
    }
    b();


    return (
        function (x) {
            return multiplier * x;
        }

    );
}

var doubleAll = makeMultiplier(2);/*"multiplier" is defined here and used in the functions above*/
console.log(doubleAll(10)); // its own exec env