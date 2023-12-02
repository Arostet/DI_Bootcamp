# #DC!
# #Write a program that accepts a comma separated sequence 
# # #of words as input and prints the words in a comma-separated 
# # #sequence after sorting them alphabetically.
# # # Use List Comprehension

# # #get user inut seperated by comma.
# # user_input = input("Write words seerated by commas: ")

# # #create a list of the words the user entered and then strip the spaces in between
# # words = [word.strip() for word in user_input.split(",")]

# # #sort the list
# # sorted_input = sorted(words)

# # # add a comma to the sorted list to print legibly 
# # result = ', '.join(sorted_input)
# # print(result)

# #DC2

# def longest_finder(sentence):

#     #first we slit the sentence into words
#     words = sentence.split()

#     longest_word = ''
#     longest_len = 0

#     for i in words:
#         word_len = len(i)
#         if word_len > longest_len:
#             longest_word = i
#             longest_len = word_len

#     return longest_word 


# sentence = input("write a sentence: ")
# print(longest_finder(sentence))



def find_longest_word(sentence):
    words = sentence.split()

    longest_word = ''
    longest_len = 0
    for i in words:
        word_len = len(i)
        if word_len > longest_len:
            word_len = longest_word
            longest_word = i
    return longest_word


sentence = input("Write a sentence: ")
print(find_longest_word(sentence))