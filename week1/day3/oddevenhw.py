#Is the number odd or even?
number = int(input("Please enter a whole number to determine if it's odd or even: "))
#Attempted to make a loop that would continue to ask for a number if user hit enter or entered a string
# while (type(number) != int):
#     number = input("Please enter a whole number to determine if it's odd or even: ")
#     try: number != ""
#         break
if (number % 2 == 0):
    print(number, "is an even number.")
else:
    print(number, "is an odd number.")