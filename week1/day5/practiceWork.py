#Create a list of numbers, print their sum.
# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# print(sum(numbers))

# #Create a list of numbers, print the largets of the numbers.
# numbers = [1, 2, 3, 4, 5, 6, 710, 8, 9, 10]
# print(max(numbers))

# #Create a list of numbers, print the smalles number.
# numbers = [1, 29, 13, 24, 95, 676, 710, 800, 59, 10]
# print(min(numbers))

# #Create a list of numbers, print each number in the list that is even.
# numbers = [1, 29, 13, 24, 95, 676, 710, 800, 59, 10]
# for number in numbers:
#     if (number % 2 == 0):
#         print(number)

#List of numbers, print each number that is positive:
# numbers = [-5, -3, -2, -1, 0, 1, 3, 5]
# for number in numbers:
#     if (number > 0):
#         print(number)

#List of numbers, and a multipier, print a new list with the numbers multiplied:
# numbers = [2, 4, 6, 8, 10, 12, 14, 16]
# multiplier = 5
# multipliedNumbers = [i * 5 for i in numbers]
# print(multipliedNumbers)

#Input a phrase and then reverse it
phrase = input("What is the phrase you want to reverse? ")
reversedPhrase = phrase[::-1]
print("The phrase reversed is: %s" % reversedPhrase)