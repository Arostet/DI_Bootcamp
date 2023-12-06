import os
import random

#"read the file" - split each words into items in a list - return the list - make sure its the right type
def get_words_from_file(file_path):
    words = []
    try:
        with open(file_path, 'r') as file:
            for line in file:
                new_list = line.split()
                words.extend(new_list)
    except FileNotFoundError:
        print("File not found.")
    return words
def get_random_sentence(length):
    words_list = get_words_from_file(file_path=file_path)
    new_sentence = ' '.join(random.choice(words_list).lower() for i in range(length))
    return new_sentence
def main():
    print("Our program is here to benefit YOU! Just enter a number of your choice and our supercomputers will spit out a random string exactly the length of the number that YOU entered. Congratulations, you have a sentence.")
    u_length = input("Choose a number between 2 and 20: ") 
    try:
        i_length = int(u_length)
        if 2 <= i_length <= 20:
            go = get_random_sentence(i_length)
            return go
        else:
            print("Enter a value between 2 and 20, please.")
            return main()
    except ValueError:
        print("That's not an integer. Please enter a valid number.")
        return main()


script_dir = os.path.dirname(os.path.abspath(__file__))
file_name = 'sowpods.txt'
file_path = os.path.join(script_dir, file_name)
result_list = get_words_from_file(file_path)
# print(result_list)

# print(get_random_sentence(13))
result = main()
print(result)

