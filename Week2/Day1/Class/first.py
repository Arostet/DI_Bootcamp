#jdnjnsjndjsn
print(dir(5))


#string methods
print("hello_world")

print("Python is fun".lower())

print("Hello world in HTML".replace("HTML", "Python")) #this method gets arguments

#numbers - integers, floats, complex numbers (we'll use integers and floats)
#A)integers - numbers w/o decimal points can also be negative

a= 5
b=3

print(type(a))

#B) Floats - w/ decimal

c=5.98989

print(c)

print(a-c)

print(a//c)

print(a%c)

#exercise

my_age = 33

new_age=my_age + 123879 

print(new_age)

print("Python class \n" *4)

print("Python class \t" *4)

print(5>3)

age = int(input("How old are you?"))

print(f"You are {age} years old")

if age > 18:
    print("You are older than 18")
elif age==18:
    print("You are 18")
elif age<18:
    print("You are younger than 18")
else:
    print("That's not an age...'")
