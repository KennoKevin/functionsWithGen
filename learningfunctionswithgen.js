//functions
function  square(number = 1) {
    return number+number;
}
console.log(square(3));


function areaCalc(side1 = 1, side2 = 1) {
    return side1 * side2
}
console.log(areaCalc(3,4));

//arrowFunction
const squareArrowfunction = (number = 1) => {
    return number+number;
}
console.log(squareArrowfunction(3));

const areaCalcArrowFunction = (side1 = 1, side2 = 1) => {
    return side1 * side2
}
console.log(areaCalcArrowFunction(3,4));

//automaticFunction
(function thisIsAutomatic() {
    console.log("Automatic Regular Function")
})();

//automaticFunctionArrow
(()=> (
    console.log("Automatic Arrow Function")
))();
