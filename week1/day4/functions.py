#Type of a function
#built in function for python
# print("")
# len(2)

# print(1 + 3)
# # Defning a function
# # the word "def", the name of the function, parenthesis (), then a colon :
# # in the body of the function, you need a return statement
# def add(number1, number2):
#     return print(number1 + number2)

# def printmessage():
#     return print("Haiiii")

# # #Function to add two numbers
# # def add(numberOne, numberTwo):
# #     return numberOne + numberTwo
# # #Function to subtract two numbers
# # def subtract(numberOne, numberTwo):
# #     return numberOne - numberTwo
# # #Function to multiply two numbers
# # def multiply(numberOne, numberTwo):
# #     return numberOne * numberTwo
# # #Function to divide two numbers
# # def divide(numberOne, numberTwo):
# #     return numberOne / numberTwo

# # printmessage()
# print(add(4, 6))

string1 = input("Type anything: ")
# lengthOfString = len(string1)

def stringlength(string1):
    #Local Variable
    length = len(string1)
    return print("The length of the string is", length)

stringlength(string1)

#SCOPE
# SCOPe is about having access to certain things in your program
#Global cope, means anyone can access this variable, function from anywhere instide the program
