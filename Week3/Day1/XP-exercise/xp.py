#1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("Rumples", 12)
# cat2 = Cat('Harry', 2)
# cat3 = Cat('Zandor', 50)

# # all_cat_ages = [cat1.age, cat2.age, cat3.age]
# all_cats = [cat1, cat2, cat3]
# def find_oldest(cats):
#     oldest = 0
#     old_cat = ""
#     for i in all_cats:
#         if i.age > oldest:
#             oldest = i.age
#             old_cat = i.name
#         else:
#             continue
#     print(f'The oldest cat is {old_cat} at {oldest} years old')
# find_oldest(all_cats)

# #2
# class Dog():
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f'{self.name} goes woof!')

#     def jump(self):
#         print(f'{self.name} jumps {self.height} cm hight!')

# davids_dog = Dog("Rex", 50)
# print(davids_dog.name, davids_dog.height)
# davids_dog.jump()
# davids_dog.bark()

# sarahs_dog = Dog("Teacup", 20)

# if sarahs_dog.height > davids_dog.height:
#     print(f'{sarahs_dog.name} is bigger')
# else:
#     print(f'{davids_dog.name} is bigger')

#3
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
#     def sing_me_a_song(self):
#         for i in self.lyrics:
#             print(f'{i}\n')

# stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

#4 

class Zoo:
    def __init__(self, zoon_name):
        self.name = zoon_name
        self.animals = []
    def add_animal(self, new_animal):
        if new_animal in self.animals:
            pass
        else:
            self.animals.append(new_animal)
        return self.animals
    def get_animals(self):
        for i in self.animals:
            print(i)
    def sell_animal(self, animal_sold):
        self.animals.remove(animal_sold)
        return self.animals
    def sort_animals(self):
        sorted_list = sorted(self.animals)
        return sorted_list
    
ramat_gan_safar = Zoo("Ramat Gan Sefari")
ramat_gan_safar.add_animal("Tiger")
ramat_gan_safar.add_animal("Leopard")
ramat_gan_safar.add_animal("Whale")
ramat_gan_safar.get_animals()
ramat_gan_safar.sell_animal("Whale")
ramat_gan_safar.get_animals()
print(ramat_gan_safar.sort_animals())


        
