# My MadLib Program by Joseph Handy

# This a title, welcoming users to the game

print "Welcome to my game!"
print'\n'

# Here I'm asking the user to guess the number

import random

guesses = 0
first = raw_input("What is your first name? ")
#this code print '\n', create line spacing
print'\n'
number = random.randint(1,5)

# Print out results
print first + ", I am thinging of a number between 1 and 5 "

# loop, here the user's answer will loop if it is wrong three times and post the correct answer
while guesses < 3:
    guess = int(raw_input("Take a guess. "))
    guesses = guesses + 1

    if guess < number:
        print "Your guess is too low!"
    if guess > number:
        print "Your guess is too high!"
    if guess == number:
        break

if guess == number:
    guesses = str(guesses)
    print "Good job, " + first + " You guessed my number in " + guesses + " guesses"
if guess != number:
    number = str(number)
    print "Nope. The number I was thinking about was actually " + number
#this code print '\n', create line spacing
print'\n'

# Input data, here the user will input some of their personal information

last = raw_input("Enter last name: ")
city = raw_input("Enter your city: ")
state = raw_input("Enter your state: ")
address = raw_input("Enter your address: ")
zip = raw_input("Enter your zip code: ")

#this code print '\n', create line spacing
print'\n'

bathroom = ['floor', 'tube', 'walls'] #array
additional = raw_input("Please add the tasks floor, tube and walls to be done within your bathroom: ")

# Print out results

print "Hello ", first, last, "I see that you are looking for repairs within your house in", city, state, "at", address, zip,
print bathroom

#this code print '\n', create line spacing
print'\n'

print "This project is to be completed as a gift for your parents as a birthday gift."

#this code print '\n', create line spacing
print'\n'

#functions with two parameters that states Happy Birthday to Dad and Mom by their names
def happyBirthday(dad):

    print("Happy Birthday to your Dad!")
    print("Happy Birthday to you!")
    print("Happy Birthday, Dear " + dad + ".")

happyBirthday('Chris')

#this code print '\n', create line spacing
print'\n'

def happyBirthday(mom):

    print("Happy Birthday to your Mom!")
    print("Happy Birthday to you!")
    print("Happy Birthday, Dear " + mom + ".");

happyBirthday('Michelle')