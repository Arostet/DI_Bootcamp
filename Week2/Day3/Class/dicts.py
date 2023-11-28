some_list = ['Harry Potter', 33, 1.7]

users = {'name' : 'Harry Potter',
         'age': 33,
         'height' : 1.7,
         'wizard' : True,
         'house': 'Gryffindor',
         'hobbies' : ['Quidditch', 'flying cars', 'eating all favors beens'],
         'best-friends': {'Hermione', 'Ron'},
         'family':[
         {'name': 'Gina Weasley',
          'age': 31, 
          'height': 1.65}],
          }

print(some_list[1]) #LIST

# #ACCESSING DATA
print(users['hobbies'])

#LIST 
print(users['hobbies'][0])

#SET
print('wizard' in users)

#NESTED DICTS
wife = users['family']['name']
print('wife: ', wife)



#LIST OF DICTIONARIES
shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]
print(shirts[0]['price'])


# Modify An Entry In A Dictionary

#existing key
users['house'] = 'Slytherin'

print(users['house'])

# add a ney key value

users['pet'] = 'Hedwig'

print(users)

# 6. Delete An Entry In A Dictionary

del users['height']
print(users)

print('height' in users)

print('keys() : ', users.keys())
print('values() : ',users.values())
print('items() : ',users.items())

member = {'name': 'Alvo Sirius Potter',
          'age': 5, 
          'height': 1.45}

users.update({'family': member})


users['family'].append(member)
print(users)


# Updating dictionary
dict1 = {'apple': 2, 'banana': 4, 'pineapple': 3}
dict2 = {'apple': 2, 'banana': 15, 'pineapple': 3, 'grape': 5}

dict1.update(dict2)

print(dict1)


# A. For Loops And Dictionaries

my_books = {
  "title": "Harry Potter",
  "author": "JK Rowling",
}

for key, value in my_books.items():
    print(f'the {key} is {value}')



