// Object literals and "this"
var literalCircle = { /*opening the curly braces generates a new object*/
    radius: 10,

    getArea: function () {
        var self = this;/*we define self in the first function so that we can use it in the second*/
        console.log(this);

        var increaseRadius = function () {/*define function to increase radius*/
            self.radius = 20;/*we must use "self" because "this" would point to the global object because we have a function within a function*/
        };
        increaseRadius();/*invoke function*/
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());




