#1
#Create a user class, that has the ability to print the users name
# the ability to print the users age

#Create a TempUser class, that has the ability to only print his name.

#Create a function that ask you to then give the user a name, and give the user an age,
#and then will create the user for you and print it to the screen. The user will have a choice
# to either be a temp user or a User

# class User:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         self.type = "permanent"

#     def printUser(self):
#         print(self.name)
#         print(self.age)
#         print(self.type)

# class tempUser:
#     def __init__(self, name):
#         self.name = name
#         self.type = "temporary"

#     def printTempUser(self):
#         print(self.name)
#         print(self.type)
        

# def createCharacter():
#     character = ""
#     characterName = input("What is your name? ")
#     characterAge = input("What is your age? ")
#     # print(f"Your name is {characterName} and your age is {characterAge}.")
#     characterClass = input(
#         """What is your class? Choose: 
#         1. User
#         2. Temp User\n
#         """
#     )
#     if characterClass == "1":
#        character = User(characterName, characterAge)
#        character.printUser()
#     #    print(character)
#     elif characterClass == "2":
#         character = tempUser(characterName)
#         character.printTempUser()
#     else:
#         print("That is an invalid choice. Try again.")
        
# createCharacter()

##2
##Create a building class
#Building class will have height, capacity, sqft, commercial
# 
# Ask the user to creat a building they will enter in height, capacity, sqft.
# 5 instances of a building
# print out the specs of the building everytim a building is made
#print statement needs to be a method
class Building:
    def __init__(self, height, capacity, sqft):
        self.height = height
        self.capacity = capacity
        self.sqft = sqft
        self.type = "commercial"

    def printBuilding(self):
        print(self.height, self.capacity, self.sqft, self.type)


def createBuilding():
    building = ""
    buildingHeight = input("What is the height of your building? ")
    buildingCapacity = input("How many people can your building hold? ")
    buildingSqFt = input("What is the sqfootage of your building? ")
    building = Building(buildingHeight, buildingCapacity, buildingSqFt)
    building.printBuilding()


choice = 0
while choice < 5:
    createBuilding()
    choice += 1

#Testing pip

