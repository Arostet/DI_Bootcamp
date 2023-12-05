import random
import string
from datetime import date, datetime, timedelta
from faker import Faker

#x1
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
#     def __str__(self) -> str:
#         output = f'{self.amount} {self.currency}s'
#         return output
#     def __int__(self):
#         return self.amount
#     def __repr__(self) -> str:
#         output = f'{self.amount} {self.currency}'
#         return output
#     def __pos__(self, val:int):
#         output = self.amount + val
#         return output
#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 output =self.amount + other.amount
#                 return output
#             else:
#                 raise TypeError (f"Cannot add between Currency type {self.currency} and {other.currency}")
#         elif isinstance(other, int):
#             output = self.amount + other
#             return output
#         else:
#             raise TypeError('Your entry is off. Try an int or instance of Currency')
#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 self.amount += other.amount
#                 return self
#             else:
#                 raise TypeError('Your entry is off. Try an int or instance of Currency')
#         elif isinstance(other, int):
#             self.amount += other
#             return self
#         else:
#             raise TypeError('Your entry is off. Try an int or instance of Currency')

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(c1)
# print(c1+c2)
# print(int(c1))
# print(repr(c1))
# c1+=5
# print(c1)
# c1 += c2
# print(c1)
# c1+c3

#X2 done in func.py and exercise_one.py
# #X3
# def random_string(length=5):
#     letters = string.ascii_letters
#     result = ''.join(random.choice(letters) for i in range(length))
#     return result
# print(random_string())

#x4
# def get_date():
#     date = datetime.datetime.now()
#     return date
# print(get_date()) 

# # x5
# def amount_left():
#     today = datetime.now()
#     new_year = datetime(2024, 1, 1)
#     dif = new_year - today
#     return f'There are {dif} until New Years!!'
# print(amount_left())

# #x6
# def total_living_minutes():
#     bday = input('enter bday formatted YYYY-MM-DD: ').split('-')
#     year, month, day = [int(item) for item in bday]
#     d = date(year, month, day)
#     t = date.today()
#     age = t - d
#     seconds = age.total_seconds()
#     total_minutes = seconds/60
#     print(total_minutes)
# total_living_minutes()

#x7
# users = []
# def fake_ppl():
#     fict_person = Faker()
#     f_name = fict_person.name()
#     f_address = fict_person.street_address()
#     f_l_code = fict_person.language_code()
#     users.append({"name" : f_name})
#     users.append({"address" : f_address}) 
#     users.append({"lang": f_l_code})
#     return users
# print(fake_ppl())
# print(fake_ppl())
# print(fake_ppl())
# fake_ppl()
# fake_ppl()
# fake_ppl()
# fake_ppl()
# fake_ppl()
# print(fake_ppl())
