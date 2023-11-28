#X1

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# new_dict = dict(zip(keys, values))
# print(new_dict)

# #X2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# total_price = 0 

# for x, y in family.items():
#     if y <= 3:
#         continue
#     elif 3 < y < 12:
#         total_price += 10
#     elif y >= 12:
#         total_price += 15
# print(f'You owe ${total_price}')

#X3
# brand = {'name' : 'Zara' ,
#          'creation_date' : '1975', 
#          'creator_name': 'Amancio Ortega Gaona' ,
#          'type_of_clothes' : ['men', 'women', 'children', 'home'] ,
#          'international_competitors': ['Gap', 'H&M', 'Benetton'] ,
#          'number_stores' : '7000' ,
#          'major_color': {'France': 'blue', 
#                          'Spain': 'red', 
#                          'US'   : ['pink', 'green']}
# }

#Change number of stores to two
# brand.update({'number_stores':'2'})

#sentence exlaining who zaras clients are
# print(f'{brand["name"]} is a company with clients who link to buy {', '.join(brand['type_of_clothes'])} clothes.')

#add key and value
# brand['country_creation'] = 'Spain'

#check if int comp is in dict, if yes add Desigual
# if 'international_competitors' in brand:
#     brand['international_competitors'].append('Desigual')
# print(brand['international_competitors'])

#Delete the information about the date of creation.
# del brand['creation_date']

#Print last int comp
# print(brand['international_competitors'][-1])

#print major color US
#print(brand['major_color']['US'])

#print amt of key value pair
#print(len(brand))

# print(brand.keys())
# more_on_zara = {'creation_date' : '1975',
#                 'number_stores' : '10000'
# }

# brand.update(more_on_zara)
# print(brand)


users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

new_dict_B = dict(list(enumerate(users)))
print(new_dict_B)

dict_a = {}
for x,y in new_dict_B.items():
    dict_a[y] = x
print(dict_a)

sorted_dict = dict(sorted(dict_a.items()))
print(sorted_dict)

#4 still need to do