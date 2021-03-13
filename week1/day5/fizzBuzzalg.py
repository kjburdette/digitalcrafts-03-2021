#FizzBuzz
#Prints numbers 1-100, 
# if the number is divisible by 3: prints fizz
# if the number is divisible by 5: prints buzz
# if the number is divisible by 3 & 5: prints fizzbuzz
for number in range(1,101):
    if (number % 3 == 0) and (number % 5 == 0):
        print("fizzbuzz")
        continue
    elif (number % 3 == 0):
        print("fizz")
        continue
    elif (number % 5 == 0):
        print("buzz")
        continue
    print(number)
