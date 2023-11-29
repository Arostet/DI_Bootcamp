# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"
# # outuput ["Bread", "Fertilizer", "Water"]

# def can_afford(wallet:str, items_dict:dict):
#     '''a funtion that checks a dict of items and price if can buy. argument=wallet, items_dict'''
#     can_buy = []
#     for product, price in items_dict.items():

#         #cleaning the data
#         price_clean = price.strip('$').replace(',', '')
#         wallet_clean = wallet.strip('$')

#         #converting the str to int
#         price_clean = int(price_clean)
#         wallet_clean = int(wallet_clean)

#         #checking what can affort
#         if price_clean > wallet_clean:        
#             continue
#         else:
#             can_buy.append(product)
#             wallet_clean -= price_clean
#     return print(f' you can buy: {can_buy} and you have {wallet_clean} dollars in your wallet')

# can_afford(wallet, items_purchase)


# # items_purchase = {
# #   "Apple": "$4",
# #   "Honey": "$3",
# #   "Fan": "$14",
# #   "Bananas": "$4",
# #   "Pan": "$100",
# #   "Spoon": "$2"
# # }

# wallet = "$100" 
# # ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 
# #nothing

# Write a function calculation() such that it can accept 
# two variables and calculate the addition 
# and subtraction of it. And also it must return both 
# addition and subtraction in a single return call

# For example:

# def calculation(a, b):
#     # Your Code

# res = calculation(40, 10)
# print(res)

# def calculation(num1, num2):
#     add = num1 + num2
#     sub = num1 - num2
#     return add, sub

# print(calculation(4,8))

def print_names(*args):
    for name in args:
        print(name)

print_names('David', 'Anna', 'Nadia')

def print_info(**kwargs):
    print(kwargs)

print_info(name = 'Viktor', age = 25, address = "Holon")