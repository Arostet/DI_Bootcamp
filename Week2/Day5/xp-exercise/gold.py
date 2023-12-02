# X1
# Write code that concatenates two lists together without using the + sign.

# list1 = ['bob', 'tom', 'larry']
# list2 = ['jean', 'sugus', 'staz']

# list1.extend(list2)

# print(list1)

# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.
# X@
# for i in range(1500, 2501):
#     if i % 5 == 0 and i % 7 == 0:
#         print(i)




# #X3
# list = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# def names_func(list):
#     user_input = input('What is your name? ')
#     if user_input in list:
#         print(list.index(user_input))    
#     else:
#         print("Try another name: ")
#         names_func(list)
            
# names_func(list)

#x4
# user_nums = input("Type 3 numbers seperated by comma")

# def get_high_num(user_nums):
#     num_list = [num.strip() for num in user_nums.split(",")]
#     high_num = 0
#     for i in num_list:
#         real_num = int(i)
#         if real_num > high_num:
#             high_num = real_num
#     return high_num
# print(get_high_num(user_nums))        

# get_high_num(user_nums)

#x5

# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.
# import string
# abc_string = string.ascii_lowercase
# print(abc_string)

# def vowel_cons(abc_string):
#     for i in abc_string:
#         if i != 'a' and i != 'e' and i != 'i' and i != 'o' and i != 'u':
#             print(f'{i} is a consonant')
#             if i != 'y' and i != 'w':
#                 print(f'{i} is a vowel')
#             else:
#                 print(f'{i} can swing both ways;)')

# print(vowel_cons(abc_string))

words =input("7 words: ")
char = input("Char: ")

def get_index_let(words, char):
    words_list = [i.strip() for i in words.split(" ")]
    for i in words_list:
        if char in i:
            ind =i.index(char)
            print(f'{ind} is the index of the letter {char} in {i}.')
            continue
        else: 
            print(f'{i} does not contain {char}.')
get_index_let(words, char)