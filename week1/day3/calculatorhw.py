#Basic Math Calculator
#Welcome Message
print("Welcome to the Basic Calculator!")

numberOne = int(input("Please enter a whole number: "))

print("List of operations:\n"
        "1. Add\n"
        "2. Subtract\n"
        "3. Multiply\n"
        "4. Divide")

selectOperand = int(input("Please select an operator from the list given: "))

numberTwo = int(input("Please enter a second whole number: "))

#Function to add two numbers
def add(numberOne, numberTwo):
    return numberOne + numberTwo
#Function to subtract two numbers
def subtract(numberOne, numberTwo):
    return numberOne - numberTwo
#Function to multiply two numbers
def multiply(numberOne, numberTwo):
    return numberOne * numberTwo
#Function to divide two numbers
def divide(numberOne, numberTwo):
    return numberOne / numberTwo

if selectOperand == 1:
    print(numberOne, "+", numberTwo, "=", add(numberOne, numberTwo))

elif selectOperand == 2:
    print(numberOne, "-", numberTwo, "=", subtract(numberOne, numberTwo))

elif selectOperand == 3:
    print(numberOne, "*", numberTwo, "=", multiply(numberOne, numberTwo))

elif selectOperand == 4:
    print(numberOne, "/", numberTwo, "=", divide(numberOne, numberTwo))
else:
    print("Sorry that is an invalid option. Please try again.")
