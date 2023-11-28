# users = {'name' : 'Harry Potter',
#          'age' : 33,
#          'height' : 1.7,
#          'wizard' : True,
#          'house' : 'Gryffindor',
#          'hobbies' : ['Quiddich', 'flying cars', 'eating all flavors'],
#          'best-friends' : {'Hermione', 'Ron'} ,
#          'family' :
#          {'name': 'Gina Weasly',
#          'age' : 31,
#          'height' : 1.65, }
#          }

# member = {'name' : 'Alvo Sirius Potter',
#           'age' : 5,
#           'height' : 1.4}

# family = users['family']

#if you want to delete what was before then do users.update...

# family.update({'family' : member})

# print(users['family'])



# print(users.keys())
# print(users.values())
# print(users.items())

#modify house
# users['house'] = 'Slytherin'
# print(users['house'])

# #create value
# users['gooba'] = 'djakj'
# print(users['gooba'])

#delete
# del users['height']
# print(users)

#NESTED DICT
# wife = users['family']['name']
# print(wife)

# print(users['house'])

# #Nested 2
# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict['class']['student']['marks']['history'])

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# }
# keys_to_remove = ["name", "salary"]

# for i in sample_dict.keys():
#     if i == "name":
#         del sample_dict[i]
#     elif i == "salary":
#         del sample_dict[i]
#     else:
#         print(sample_dict)

# for i in keys_to_remove:
#     if i in sample_dict:
#         del sample_dict[i]
# print(sample_dict)

# #for loops in dict
# my_books = {
#   "title": "Harry Potter",
#   "author": "JK Rowling",
# }

# for x, y in my_books.items():
#     print(f'The {x} is {y}')

# for x, y in my_books.items():
#     print(x, y)

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

for x, y in enumerate(users):
    print(f'{x}: {y}')
    print(f'{y}: {x}')


