// Object creation
/*
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();/!*this is an object within an object*!/
company.ceo.firstName = "Mark";/!*in order to add things to the ceo object we need to create one*!/
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: "
    + company.ceo.firstName);

console.log(company["name"]);/!*you can also use the bracket notation to get values*!/
var stockPropName = "stock of company";/!*bracket notation is useful when you have variables with spaces in it*!/
company[stockPropName] = 110;

console.log("Stock price is: " +
    company[stockPropName]);
*/

// Better way: object literal
var facebook = {
    name: "Facebook",/*name and value are separated with ":" and name/value pairs end with ","*/
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 110
};

console.log(facebook);
console.log(facebook.ceo.firstName);
console.log(facebook["stock of company"]);/*bracket notation is useful when you have variables with spaces in it*/











