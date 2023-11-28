students = ['Anna', 'Alex', 'Olga'] #pre-setting the collection to loop through

print('regular for loop')
for name in students:   #iterates through the collection (in this case, list)
    print(name)

for student in students:   
    if 'Alex' in students: #check a condiction: it will check the condition for each iteration
        print(True)
    else: print(False)

print('in range for loop')
for i in range(1,10): #instead of pre-setting the collection, we create it within the loop using range()
    print(i)

print('in len(list) for loop')

for i in range(len(students)): #creates a range using the len(collection) as stop point.
    print(students[i], i)

print('enumerate for loop') #creates two variables within the loop: "i" for the number (index) and "j" for the item (name)
for i, j in enumerate(students):
    print(i, j)

#WHILE LOOPS

print('while loop')
i = 0
while i < len(students): #iterates while some condition is True
    print(students[i])
    i += 1


print('while True')
students = []
while True: #iterates until "break"
    name = input('Give me the name of one student or "q" to exit: ').capitalize()
    if name == 'Q':
        print(students)
        print('Thank you')
        break
    else:
        students.append(name)
    
    
    