# # #exercise 1
# user_string = input("Type some letters:")

# if len(user_string) < 10:
#     print("string not long enough")
# elif len(user_string) > 10:
#     print("string too long")
# elif len(user_string) == 10:
#     print("perfect string")


# #exercise 2
# len_user_string = len(user_string)
# print(user_string[0]+user_string[len_user_string-1])

hello_world = input("Please type: Hello World")
length = len(hello_world)

for i in range(0, length+1):
    print(hello_world[:i])

