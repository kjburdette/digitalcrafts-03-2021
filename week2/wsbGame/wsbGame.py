import time
from random import randrange


class Hero:
    def __init__(self, name):
        self.name = name
        self.maxhp = 100
        self.attack = 20
        self.wallet = 0

    # def printHero(self):
    #     print(
    #         "\nNAME: \n" + {self.name} +
    #         "MAXHP: \n" + {self.maxhp} +
    #         "ATTACK: \n" + {self.attack} +
    #         "DOGE: \n" + {self.maxhp}
    #     )


class Minion:
    def __init__(self):
        self.name = "Hedgie"
        self.maxhp = 10
        self.attack = 3


class Boss:
    def __init__(self):
        self.name = "Melvin"
        self.maxhp = 500
        self.attack = 100


# Welcome message


def welcomeMessage():
    print("\n\nWelcome to WSB Python Slayer!\n\n"
          """       >---==
                         ==
                        =
                       ==
         ejm96        =====
                    ==========\n"""
          "\nCan you help us save the day traders? Slay hedgie minions and earn DOGEcoin\n"
          "to to purchase powerful items. When you are strong enough take down Melvin the Python!\n"
          "Create your character and start your adventure!\n")


def createHero():
    heroName = input("What is your name hero? ")
    hero = Hero(heroName)
    # hero.printHero()
    return hero


def mainMenu():
    adventureOption = input(
        "\nChoose an option "+hero.name+":\n"
        "1. Go to the store.\n"
        "2. Fight some hedgies.\n"
        "3. Slay Melvin! (not for n00bs)\n"
        "q. Quit\n\n> "
    )
    if (adventureOption == "1"):
        functionChoice = store()
    elif (adventureOption == "2"):
        functionChoice = fightHedgies()
    elif (adventureOption == "3"):
        functionChoice = fightMelvin()
    elif (adventureOption == "q"):
        functionChoice = "q"
    else:
        functionChoice = ">>>Not a valid choice. Try again champ!<<<"
    return functionChoice


def store():
    itemPurchased = ''
    while (itemPurchased != "4"):
        print("\nWelcome to the store! You currently have " +
              str(hero.wallet) + " DOGEcoin. Pick an item to purchase.\n\n"
              "Current HP:"+str(hero.maxhp)+"\n")
        itemPurchased = input(
            """1. Health Potion - 5 doge 
            -Adds 10hp.\n"""
            """2. Gorilla Diamond Hands - 20 doge
            -Increases attack power by 5000% Attack Damage!\n"""
            """3. Buisness Suit - 15 doge
            -Increase your HP by 300! Pog!\n"""
            "4. Main Menu\n\n> "
        )
        if (itemPurchased == "1"):
            if(hero.wallet >= 5):
                hero.maxhp += 10
                hero.wallet -= 5
                print("\nYummy! You drank the health potion! You have " +
                      str(hero.maxhp) + "HP.\n")
            else:
                print(
                    "\n>>>Sorry you do not have enough doge.  Go slay some muthafuggin hedgies.<<<\n")
        elif (itemPurchased == "2"):
            if(hero.wallet >= 20):
                hero.attack *= 50
                hero.wallet -= 20
                print("\nYour hands harden into diamonds for DFV increasing your Attack Power by " +
                      str(hero.attack) + "!!!\n")
            else:
                print(
                    "\n>>>Sorry you do not have enough doge :(. Go slay some muthafuggin hedgies!<<<\n")
        elif (itemPurchased == "3"):
            if(hero.wallet >= 15):
                hero.maxhp += 300
                hero.wallet -= 20
                print("\nYou don the suit of Steve Jobs himself. Lookin snazzy 8)! Your HP is now " +
                      str(hero.maxhp) + "!!!\n")
            else:
                print(
                    "\n>>>Sorry you do not have enough doge :(.  Go slay some muthafuggin hedgies!<<<\n")
        elif (itemPurchased == "4"):
            continue
        else:
            print("\n>>>Quit pushing the wrong button! Let's try again eh?<<<\n")

    return itemPurchased


def fightHedgies():
    print("\nWalking down Wallstreet...")
    time.sleep(2)
    print("...")
    time.sleep(1)
    print("Hedgie spotted! Lets get to pwning!\n")
    hedgie = Minion()
    fightOption = ''
    while (hedgie.maxhp > 0 and hero.maxhp > 0 and fightOption != "3"):
        fightOption = input("You have "+str(hero.maxhp)+" HP and "+str(hero.attack)+" AP.\n"
                            "Hedgie minion has " +
                            str(hedgie.maxhp)+" HP and " +
                            str(hedgie.attack)+" AP.\n\n"
                            "What would you like to do?\n"
                            "1. Attack\n"
                            "2. Do nothing\n"
                            "3. Flee\n\n> ")
        if fightOption == "1":
            heroAttack = randrange(6, hero.attack+1)
            hedgieAttack = randrange(1, hedgie.attack+1)
            hedgie.maxhp -= heroAttack
            hero.maxhp -= hedgieAttack
            print("\nPOW!\n")
            time.sleep(1)
            print("\nYou struck the hedgie for "+str(heroAttack)+" HP.\n"
                  "The Hedgie minion has struck you for "+str(hedgieAttack)+" HP.\n")
            if (hedgie.maxhp <= 0 or hero.maxhp <= 0):
                if (hedgie.maxhp <= 0):
                    earnings = randrange(3, 5)
                    hero.wallet += earnings
                    print("\nVictory!! You pwned the hedgie and added " +
                          str(earnings)+" DOGEcoin to your wallet!\n")
                    continue
                else:
                    break
        elif fightOption == "2":
            if (hedgie.maxhp > 0 and hero.maxhp > 0):
                hedgieAttack = randrange(1, hedgie.attack+1)
                hero.maxhp -= hedgieAttack
                print("\nZZzzZZ!\n")
                time.sleep(2)
                print("\nYou slept on the gains and got hit for " +
                      str(hedgieAttack)+" damage :(.\n")
                if (hero.maxhp <= 0):
                    break
        # elif hedgie.maxhp <= 0:
        #     earnings = randrange(3, 6)
        #     hero.wallet += earnings
        #     print("\nVictory!! You pwned the hedgie and added " +
        #           str(hero.wallet)+" DOGEcoin to your wallet!\n")
        #     continue
        # elif hero.maxhp <= 0:
        #     break
        elif fightOption == "3":
            print("\nRunning away!\n")
            time.sleep(2)
            print("\nYou got paper hands and FUD took over!\n")
            continue
        else:
            print("\nLets try putting in a better option.\n")


python = Boss()

welcomeMessage()
hero = createHero()
# print("Name: " + hero.name)
# ()
choice = ''
while (choice != "q" and hero.maxhp > 0):
    choice = mainMenu()
    if hero.maxhp <= 0:
        print("You got shorted into oblivion and you lost too much HP. Better luck next time kid!")
        break
