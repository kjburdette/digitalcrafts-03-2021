#This is a list
pets = ["doggo", "cat", "iquan", "pikachu"]
otherPets = ["mouse", "bird", "rabbit"]
# you can use len to find the length of a list
# print(len(pets))

# Loop over a list
index = 0

# looping over a list, a while loop requires a condition
# while index < len(pets):
#     pet = pets[index]
#     print("What pet are you? I'm a %s" % pet)
#     index += 1
    #index = index + 1

# For loop, for ... in
#For in loops are better to use for lists than while loops
# count = 0
# write for, write the singular name of the lists you are looping over, write of, write the name of the list
# for pet in pets:
#     print(pet)
#     print(count)
#     count += 1

#How do we combine lists?
# combinedLists = pets + otherPets
# print(combinedLists)

#How do we modify a list?
pets[0] = "otter"
print(pets)