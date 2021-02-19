// Function constructors are usually named with a capital letter, in this case "Circle"
function Circle (radius) {
    this.radius = radius;
}

/*this part should not be in the function so that we don't create the area with each new object that we create*/
Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);/*raised by the power of two*/
    };

/*we use a function to create a new object
Function constructors should start with a capital letter, like "Circle" to be recognized more easily*/
var myCircle = new Circle(10);/*"new" makes "this" point to the circle function*/
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);




