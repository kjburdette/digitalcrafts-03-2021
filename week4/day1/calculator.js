function calculate(operand, num1, num2){
    if (operand == "add"){
        return console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
    else if (operand == "subtract"){
        return console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }
    else if (operand == "multiply"){
        return console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }
    else if (operand == "divide"){
        return console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    else{
        console.log("Incorrect operand, try again.")
    }


}

calculate("add", 5, 2)
calculate("subtract", 100, 67)
calculate("multiply", 56, 2)
calculate("divide", 45, 5)
calculate("remainder", 50, 3)