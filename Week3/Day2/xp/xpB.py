# from xp import Dog

# class PetDog(Dog):
#     def __init__(self, dog_name: str, dog_age: int, dog_weight: int, trained=False) -> None:
#         super().__init__(dog_name, dog_age, dog_weight)
#         self.trained = trained
#     def train(self):
#         print(self.bark())
#         self.trained = True
#         return self.trained
#     def play(self, *args):
#         dog_names = [self.name]
#         for obj in args:
#             dog_names.append(obj.name)
#         dog_str = ', '.join(dog_names)
#         print(f'{dog_str} all play together')

# dog_1 = PetDog("Charlie", 13, 30)
# dog_2 = PetDog("Boby", 3, 11)
# dog_3 = PetDog("Moti", 7, 22)

# dog_1.play(dog_2, dog_3)
