#Finds the numbers up to 1000 that are multiples of 3 OR 5 and then adds them.
answer = 0
for number in range(1,1000):
    if (number % 3 == 0) or (number % 5 == 0):
        answer += number
print(answer)