class Farm:
    def __init__(self, farm_name) -> None:
        self.name = farm_name
        self.animals = {}
    def add_animal(self, new_animal, number=1):
            if new_animal in self.animals.keys():
                 pass
            else:
                 self.animals.update({new_animal:number})
            return self.animals
    def show_list(self):
        output = ''
        for x,y in self.animals.items():
            output += f'{x} : {y}\n'
        return output
            
    def get_info(self):
         animal_list = self.show_list()
         print(f"On {self.name}'s farm there are: \n{animal_list}\nE-I-E-I-O!")
    def get_animal_types(self):
         srted_list= sorted(self.animals.keys())
         return srted_list
    def get_short_info(self):
         a_list = self.get_animal_types()
         print(f"{self.name}'s farm has {'s, '.join(a_list)}.")


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

# macdonald.get_info()

# print(macdonald.get_animal_types())

macdonald.get_short_info()
