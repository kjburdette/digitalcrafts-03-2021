firstNameOfUser = input("What is your first name?")
lengthOfFirstName = len(firstNameOfUser)
#Continues to ask for first name until given a name
while (lengthOfFirstName < 1):
    firstNameOfUser = input("What is your first name?")
    lengthOfFirstName = len(firstNameOfUser)

lastNameOfUser = input("What is your last name?")
lengthOfLastName = len(lastNameOfUser)
#Continues ot ask for last name until given a name
while (lengthOfLastName < 1):
    lastNameOfUser = input("What is your last name?")
    lengthOfLastName = len(lastNameOfUser)

print("The users name is %s %s" % (firstNameOfUser, lastNameOfUser))

friendsFirstName = input("What is your friends name?")
lengthOfFriendsFirstName = len(friendsFirstName)

while (lengthOfFriendsFirstName < 1):
    friendsFirstName = input("What is your friends first name?")
    lengthOfFriendsFirstName = len(friendsFirstName)

friendsLastName = input("What is your friends last name?")
lengthOfFriendsLastName = len(friendsLastName)

while (lengthOfFriendsLastName < 1):
    friendsLastName = input("What is your friends last name?")
    lengthOfFriendsLastName = len(friendsLastName)

print("Your name is %s %s friends with %s %s" % (firstNameOfUser, lastNameOfUser, friendsFirstName, friendsLastName))
