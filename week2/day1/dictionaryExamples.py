#add info, print out your computer info in the terminal

digitalCraftsStudent = {
    "name": "Kendall",
    "city": "Atlanta",
    "computer": ["Windows"],

}

# for computertype in digitalCraftsStudent["computer"]:
#     print(computertype)

print(digitalCraftsStudent["computer"][0])
# add a platform , skill level
#print the time you prefer to game

gamer = {
    "platform": "PC",
    "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
    "skill": "Advanced"
}


print(gamer["gamingHours"][1]["weekends"])


car = {
    "model": "",
    "image": "",
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