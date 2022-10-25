let num1 = 2;
let num2 = 5;

function biggerNumber(numOne, numTwo) {
    if (numOne > numTwo) {
    console.log(numOne);
    } else if (numOne < numTwo) {
        let result = numTwo
        console.log(numTwo);
    } else {
        console.log("Even numbers");
    }
}

let result = biggerNumber(num1, num2);