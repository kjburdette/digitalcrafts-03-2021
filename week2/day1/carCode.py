# 1. print out a list of engine choices (the whole list)
# 2. print out the horsepower values only (all of them)
# 3. check to see if the value "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value
car = {
    "model": "",
    "image": "https://bit.ly/2OyM1od",
    "year": "",
    "engineChoices": [
        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],
}

# for engine in car["engineChoices"]:
#     for size in engine:
#         print(size)
# print(car["engineChoices"])

print(car["engineChoices"][0]["v4"]["horsepower"],car["engineChoices"][1]["v6"]["horsepower"],car["engineChoices"][2]["v8"]["horsepower"],car["engineChoices"][3]["v12"]["horsepower"] )

# for engine in car["engineChoices"]:
#     for size in engine:
#         if "horsepower" in car:
#             print(size)
# horsePower = car["engineChoices"][["v4"]
# print(horsePower)

# if "trim" in car:
#     print("Trim exsist as a car option")
# else:
#     print("Trim is not an option")

# car["color"] = ["Blue", "Black", "Red", "Silver"]

# print(car)