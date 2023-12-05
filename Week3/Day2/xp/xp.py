#x1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# cat_b = Bengal("Bingo", 3)
# cat_c = Chartreux("Joli", 4)
# cat_s = Siamese("Moli", 5)
# all_cats = [cat_b, cat_c, cat_s]

# sarahs_pets = Pets(all_cats)

# for cat in all_cats:
#     print(cat.walk())

#x2

# class Dog():
#     def __init__(self, dog_name:str, dog_age:int, dog_weight:int) -> None:
#         self.name = dog_name
#         self.age = dog_age
#         self.weight = dog_weight
#     def bark(self):
#         barking = f'{self.name} is barking!'
#         return barking
#     def run_speed(self):
#         speed = (self.weight % self.age * 10)
#         return speed
#     def fight(self, other_dog):
#         dog1 = self.run_speed()
#         dog2 = other_dog.run_speed()
#         if dog1 > dog2:
#             print(f'{self.name} is the winner!')
#         elif dog1 < dog2:
#             print(f'{other_dog.name} is the winner!')
#         else:
#             print("Tie")

# dog_1 = Dog("Charlie", 13, 30)
# dog_2 = Dog("Boby", 3, 11)
# dog_3 = Dog("Moti", 7, 22)

# print(dog_1.bark())
# print(dog_1.run_speed())
# dog_1.fight(dog_3)

#x3
#in xpB

#x4
class Family():
    def __init__(self, last_name):
        self.members = []
        self.last = last_name
    def born(self, **kwargs):
        self.members.append(kwargs)
        # for x, y in kwargs.items():
        #     self.members[x] = y
        return self.members
    def is_18(self, member_name):
        for dict in self.members:
            if dict["name"] == member_name:
                age = dict["age"]
                if age >=18:
                    dict["is_child"] = True
                else: 
                    dict["is_child"] = False

            
    def family_presentation(self):
        print(f'{self.last} : {self.members}')

fam1 = Family("Doe")
fam1.born(name='Michael', age=35, gender='Male', is_child=False)
# print(fam1.members)
        
# print(fam1.is_18('Michael'))
fam1.family_presentation()

#x5
class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)
    def use_power(self):
        for dict in self.members:
            if dict["is_child"] == False:
                print(dict["power"])
            else:
                raise Exception("Too young to use power...")
    def incredible_presentation(self):
        super().family_presentation()

inc1 = TheIncredibles('Incredible')   
inc1.born(name="Michael", age=35, gender='male', is_child= False, power='fly', incredible_name='MikeFly')
inc1.use_power()
inc1.incredible_presentation()