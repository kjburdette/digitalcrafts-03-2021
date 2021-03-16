# You have two characters, a Hero and a Goblin
# your goal is to let them fight, whoever wins, will be printed out in a victory message
# whoever is defeated can be printed out in that message as well

# human
#     name
#     attack
#     defense
#     hp

# #Goblin
#     name
#     attack
#     defense
#     hp
#     clan

class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Hero"

    def takeDamage(self):
        self.hp -= 5


class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Goblin"

    def takeDamage(self):
        self.hp -= 5


class Knight:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Knight"

    def takeDamage(self):
        self.hp -= 5


def HeroAttacksGoblin(hero, goblin):
    print(f"{hero.name} attacks {goblin.name}")
    goblin.takeDamage()
    print(f"{goblin.name} takes 5 damage")
    print(f"{goblin.name} has {goblin.hp} left")


def victoryMessage(hero, goblin):
    print(f"{hero.name} is the victor and they have slain {goblin.name} ")


def characterCreation():
    charName = input("What is your name?")
    charClass = input(
        "What is your class? Choose exactly ((k)Knight, (g)Goblin, (h)Hero)"

    if charClass == "h":
        character=Hero(charName, 10)
    elif charClass == "g":
        character=Goblin(charName, 10)
    elif charClass == "k":
        character=Knight(charName, 10)
    else:
        print("Please follow my rules and enter a valid choice.")
    return character


bob=Goblin("Bob", 10)
kendall=Hero("Kendall", 10)
tyler=Knight("Tyler", 10)

# print("the name of this character", bob.name)
# print("the name of this character", kendall.name)
# print("the name of this character", tyler.name)

# Kendall to punch bob the goblin, simulate attacking another character
# you take 5 damage to your health

# I ask the user to type in their name
# I give them hp values
# I print out their hp values
# I then set a global variable to be the while loop condition

while bob.hp > 0:
    HeroAttacksGoblin(kendall, bob)
    if

# pip
