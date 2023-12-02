import random

# X1
# def display_message():
#     print("I'm in a full-stack Python bootcamp!")

# display_message()

# X2
# def favorite_book(title):
#     print(f'One of my favorite books is {title}')

# favorite_book("Harry Potter")

# X3
# def describe_city(city, country="Jordan"):
#     print(f'{city} is in {country}.')
# describe_city("Amman")

# # X4
# def rand_comare(number):
#     rand = random.randint(number, 100)
#     if number == rand:
#         print(f"Success: {rand} came out of the abyss to match you!")
#     else:
#         print(f"You entered {number}, but the abyss spit out {rand}. Good luck next time")
# rand_comare(5)

# # X5
# def make_shirt(size='L', text="I Love Python"):
#     print(f'The size of the shirt is {size} and the text is "{text}"')
# make_shirt("m", "Go Ya")
# make_shirt()
# make_shirt("m")
# make_shirt("S", "Pickles are Wickles!")

# X6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magis=magician_names):
#     for i in magis:
#         print(i)

# # show_magicians()

# def make_great(magis=magician_names):
#     for i in range(len(magis)):
#         magis[i] += " The Great"
# make_great()
# show_magicians()
    
# X7
# def get_random_temp(season):
#     if season == "Summer".lower():
#         rand_temp = random.randint(23, 40)
#     elif season == "Fall".lower():
#         rand_temp = random.randint(5, 19)
#     elif season == "Winter".lower():
#         rand_temp = random.randint(-10, 10)
#     else:
#         rand_temp = random.randint(10, 23)
#     return rand_temp 

# def main():
#     choice = input("What season is it?")
#     talk_temp = get_random_temp(choice)
#     if talk_temp < 0:
#         print(f'The temp right now is {talk_temp} degrees Celcius!')
#         print("Brrr, that’s freezing! Wear some extra layers today.")
#     elif 0 < talk_temp <= 16:
#         print(f'The temp right now is {talk_temp} degrees Celcius!')
#         print("Quite chilly! Don’t forget your coat")
#     elif 16 < talk_temp <= 23:
#         print(f'The temp right now is {talk_temp} degrees Celcius!')
#         print("Nice weather. Enjoy!")
#     elif 23 < talk_temp < 32:
#         print(f'The temp right now is {talk_temp} degrees Celcius!')
#         print("Time for the beach.")
#     else:
#         print(f'The temp right now is {talk_temp} degrees Celcius!')
#         print("It might be the day for some AC.")
# main()

#X8
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def star_quiz(data):
    correct = 0
    incorrect = 0
    inc_ans = []
    for i in data:
        user_ans = input(i["question"])
        if user_ans.lower() != i["answer"].lower():
            print("Sorry, wrong answer")
            incorrect +=1
            inc_ans.append(i["question"])
        else:
            print("Nice! That's right.")
            correct +=1
    print(f"You got {incorrect} wrong and {correct} questions right! ")
    if incorrect > 0:
        print("Incorrect answers:", inc_ans)

star_quiz(data)