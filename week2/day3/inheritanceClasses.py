class Currency:
    def __init__(self, name, nation, price, quantity):
        self.name = name
        self.nation = nation
        self.price = price
        self.quantity = quantity

    def printCurrency(self):
        print(
            f"Name: {self.name}\nNation: {self.nation}\nPrice: {self.price}\nQuantity:{self.quantity}\n")

    def addQuantity(self, amount):
        self.quantity += amount


yen = Currency("Yen", "Japan", 20, 10)
# print("They value of this currency is", yen.price)
# print(f"{yen.name} is from {yen.nation} and is worth {yen.price}")

# yen.printCurrency()
# print(yen.quantity)
# yen.addQuantity(50)
# print(yen.quantity)


class cryptoCurrency(Currency):
    def go_to_de_mooon(self):
        self.price = self.price * 1000


doge = cryptoCurrency("DogeCoin", "Doge Nation", 5, 1000000)

print(f"\nThe currency is {doge.name}.\n")
doge.printCurrency()
doge.go_to_de_mooon()
doge.printCurrency()
