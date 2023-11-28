# for enumerate

students = ['Lior', 'Sveta', 'Estee', 'David']

for i, j in enumerate(students): #unpacks the tuples
    print(i, j)

for name in enumerate(students): #output = tuples
    print(name)

# #ZIP

hobbies = ['dance', 'paint', 'cars', 'soccer']

# for item in zip(students, hobbies):
#     print(item)
# for item in zip(hobbies, students):
#     print(item)

print(dict(zip(students, hobbies)))


for i in range(1,6):
    print(i)

else:print('finished')

count = 0
while count <= 5:
    print(count)
    count += 1
else:
    print('count is more than 5')

for letter in 'Leonardo Da Vinci':
    if letter == 'o':
        continue
    else:
        print(letter) # dont execute for 'o' letter


#"regular list way"
some_nums = []

for num in range(11):
    some_nums.append(num)
print(some_nums)

#The List Comprehension Way

some_nums = [num for num in range(11)]

print(some_nums)

#List Comprehension with if statement:

some_nums = [num for num in range(11) if num %2 == 0]
print(some_nums)


