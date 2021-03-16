#1
#Create a user class, that has the ability to print the users name
# the ability to print the users age

#Create a TempUser class, that has the ability to only print his name.

#Create a function that ask you to then give the user a name, and give the user an age,
#and then will create the user for you and print it to the screen. The user will have a choice
# to either be a temp user or a User

class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class tempUser:
    def __init__(self, name):
        self.name = name

def createCharacter():
    characterName = input("What is your name? ")
    characterAge = input("What is your age? ")
    print(f"Your name is {characterName} and your age is {characterAge}")
    characterClass = input(
        """What is your class? Choose: 
        1. User
        2. Temp User\n
        """
    )
    if characterClass == "1":
       character = User(characterName, characterAge)
       print(character)
    elif characterClass == "2":
        character = tempUser(characterName)
        
createCharacter()              