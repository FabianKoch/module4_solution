// Default values
function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever!";/*if sideDish is cohorced to false it takes the second statement because it's true*/
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
