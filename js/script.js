var message = "in global";
console.log("global: message = " + message);/*message = "in global" as defined in the global area*/

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);/*message is = "inside a" as it's define in the function a*/

    function b () {
        console.log("b: message = " + message);/*function b is defined in function a and is equal to "inside a"*/
    }

    b();/*this will log "b: message = inside a"*/
}

a();/*this will log "a: message = inside a" and "b: message = inside a"*/