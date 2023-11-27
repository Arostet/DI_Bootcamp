#Exercise 1 : Hello World-I Love Python

print("Hello word \n" *4 + "I love python \n" *4)

#Exercise 2 : What Is The Season ?

season = int(input("What Month is it? 1-12 "))

if 3 <= season <= 5:
    print("Spring")
elif 6 <= season <= 8:
    print("Summer")
elif 9 <= season <= 11:
    print("Fall")
else:
    print("Winter")