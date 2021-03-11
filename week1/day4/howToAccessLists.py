#This is a list
pets = ["doggo", "cat", "cat2", "pikachu"]

#We access lists variables by their index, which starts at 0
dog = pets[0]


#If we try to access something that is not in the list, aka not indexed, we get an error
# dog = pets[9]

#If you give a negative INDEX, you access the end of the list
# demonSpawn = pets[-1]
# print(demonSpawn)
# print(dog)

#If you want to access a range of values in a list, you use a number and colon: and then the end of the range you want to access
# myFavoriteTwoAnimals = pets[0:2]
# print(myFavoriteTwoAnimals)

demonSpawns = pets[-3: -1]
print(demonSpawns)

#If you start your index range with a negative, it starts from the end of the list.