# Take the users first name
name_of_user = input("What is your first name?")
# Store the users first name into an umber value that we can use
lengthOfUserName = len(name_of_user)
while(lengthOfUserName < 1):
    name_of_user = input("What is your first name?")
    lengthOfUserName = len(name_of_user)
# If statements have if_your condition:
# else: code goes below it
if lengthOfUserName > 0:
    nameOfFriend = input("What is your friends name?")
    print("Your friends name is ", nameOfFriend")
else:
    print("Please enter at least one letter...literally one letter")

# #While loop
# #A condition will have to be true, then your loop will keep running

lastNameOfUser = input("What is your last name?")
# # Store the users last name into a number value that we can use
lengthOfUserLastName = len(lastNameOfUser)
print("Hello %s %s, welcome to python" % (name_of_user, lastNameOfUser))
# # If statements. Do something if a certain condition happens or doesn't happen
print("This is the length of the users first name is ", lengthOfUserName)
print("This is the length of the users last name is ", lengthOfUserLastName)
print("The user name is %s %s " % (name_of_user, lastNameOfUser))