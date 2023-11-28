# #🌟 Exercise 1 : Set

# my_fav_numbers = {1, 3, 7, 10, 11, 13, 17, 19}
# my_fav_numbers.update([32, 49])
# my_fav_numbers_l = list(my_fav_numbers)
# my_fav_numbers_l.pop()
# my_fav_numbers_s = set(my_fav_numbers_l)
# print(my_fav_numbers_s)
# friend_fav_numbers = {2, 4, 5, 100}
# all_numbers = my_fav_numbers_s.union(friend_fav_numbers)
# print(all_numbers)

#🌟 Exercise 2: Tuple
#the answer is no

#exercise 3: List
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# basket.remove("Banana")
# basket.pop()
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# print(basket.count("Apples"))
# basket.clear()
# print(basket)

#exercise 4
#a float has decimal points, an integer is a whole number
#you can generate a sequence of float by taking a number and dividing it repeatedly by another float.
# flot_seq = 1.5
# for i in flot_seq:
    
# #exercise 5
# for i in range(1, 21):
#     print(i)
# for i in range(1, 21):
#     if i % 2 == 0:
#         print(i)

#exercise 6
# my_name = "Aron"
# user_name = input("What's your name? ")
# while my_name == "Aron":
#     if user_name == my_name:
#         print("Yay! Same Names...")
#         break
#     else:
#         user_name = input("Sorry, we need the same one's for this. What's your name? ")

#X7

# user_fav_fruits = input("What's your fav fruits?")
# user_fav_fruits_l = [user_fav_fruits]
# user_new_fruits = input("Now name any fruit: ")
# if user_new_fruits not in user_fav_fruits:
#     print("New fruit, enjoy;)")
# else:
#     print("You chose one of your favorite fruits! Enjoy!")

#X8
# toppings_list = []
# total_price = 10  # Base price for the pizza
# active = True
# while active:
#     topping = input("Enter a pizza topping (or 'quit' to finish): ")

#     if topping == 'quit':
#         break

#     toppings_list.append(topping)
#     total_price += 2.5  # Add 2.5 for each topping

#     print(f"Adding {topping} to your pizza.")

# print("Toppings on your pizza:")
# for topping in toppings_list:
#     print(f"- {topping}")

# print(f"Total price for your pizza: ${total_price}")

# #X9
# total_price = 0
# active = True

# while active:
#     age = int(input("What's your age? **0 will quit** "))
    
#     if age == 0:
#         break
#     if age < 3:
#         total_price += 0
#     if 3 < age < 12:
#         total_price += 10
#     else: 
#         total_price += 15
# print(f'your total is ${total_price}.')