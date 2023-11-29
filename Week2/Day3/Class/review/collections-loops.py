#SEQUENCES AND COLLECTIONS IN PYTHON: organize, store and retrieve data


tasks = ['study', 'grocery', 'wash the car', 'emails']
tasks2 = []
#ADD
# tasks.append('call mom')
# print(tasks)
# print(tasks[-1])

# #REMOVE
tasks.remove('grocery')
print(tasks)

tasks.pop(1) #default: removes the last element
print(tasks)

tasks = input('enter your tasks separated by comma: ').split(',')
print(tasks)

s_tasks = sorted(tasks)
print(tasks, 'sorted: ', s_tasks)

tasks.sort()
print('after sort\n', tasks)

holiday_tasks = ['order special food', 'buy winne', 'buy chalah', 'call mom']

tasks.extend(holiday_tasks)
print(tasks)

tasks + holiday_tasks

all_tasks = [*tasks, *holiday_tasks]
print('all_tasks', all_tasks)

#_________________________________________________________________________
#SETS
# They're ideal for situations like removing duplicates from a collection 
# or finding common elements between different collections


fruits = {'apple', 'banana', 'orange', 'lime', 'tomatos'}
vegetables = {'carrot', 'tomatos', 'brocoli'}

common = fruits.intersection(vegetables)
print(common)

grocery_list = fruits.union(vegetables)
print('grocery-list: ', grocery_list)


#_________________________________________________________________________
# TUPLES
# apropriate for storing data that shouldn't change, 
# like the coordinates of a point in a 2D space, (x, y).

point = (3, 5)
point2 = tuple()

x, y = (3,5)
print(x)
print(y)

print(point[0])


#_________________________________________________________________________
#DICTS
#Dictionaries are key-value pairs and are best used 
#when you need a logical association between a key:value pair

users = {'basic-info': {'name': 'Alice', 'age': 20, 'email': 'alice@gmail.com'},
          'scores':[100, 255, 345]}

print(users['basic-info']['name'])
print(users['scores'][-1])
print(users['scores'].remove(255))
print(users)
