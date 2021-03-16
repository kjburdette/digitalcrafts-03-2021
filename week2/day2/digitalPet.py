# KEEPING YOURSELF ORGANIZED
# Define global functions and variables first at the top of your program
# Define classes netx and any unique methods inside of them
# Then define your while loop if you need the user to keep doing tasks until a certain condition is met (remember, your condition needs to be global,
# and needs to be re-assigned inside your while)


class Spider:
    def __init__(self, name, strength, defense, hp):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
#Function defined inside of a class are called methods.
    def feedSpider(self):
        print("Omm nomm nom nom")
        self.strength += 5
        self.hp += 5

    def playedWithSpider(self):
        print("He is getting angry >:(")
        self.defense += 5

    def howIsSpiderDoing(self):
        print("How you doing Spider?")
        print(petSpider)

    def smile(self):
        print(f"{self.name} smiled.")
    

class OmegaSpider:
    def __init__(self, name, strength, defense, hp, size):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
        self.size = size
    

#Examples of creating new instances of a spider
peter = Spider()("Peter", 20, 10, 100)
mercado = Spider()("Mercado", 25, 20, 90)
beelzebub = OmegaSpider()("Beelzebub", 1000, 200, 1000, "absolutely massive")


def welcomeMessage(self):
        message = int(input("""
        Please choose from the following:
        1. Feed Spider
        2. Play with Spider
        3. Check on Spider
        4. Stare
        5. Quit
        """))

        return message


choice = ""
# while choice != "5":
#     choice = welcomeMessage()
#     if choice == 1:
#         feedPeter()
#     elif choice == 2:
#         playedWithPeter()
#     elif choice == 3:
#         howIsPeterDoing()
#     elif choice == 4:
#         print("Staring....")
#     else:
#         pass



