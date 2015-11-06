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