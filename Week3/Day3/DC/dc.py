import math

class Circle():
    def __init__(self, diameter):
        self.diameter = diameter
        self.circle_list = []
    def find_area(self):
        area = (1/4) * math.pi * self.diameter**2
        return area
    def __str__(self):
        a = self.find_area()
        return f'This circle has a diameter of {self.diameter} and an area of {a}.'
    def __add__(self, other):
        new_a = self.diameter + other.diameter
        return Circle(new_a)
    def __iadd__(self, other):
        self.diameter += other.diameter
        return self
    def is_equal(self, other):
        if self.diameter == other.diameter:
            True
        else:
            False
    def is_greater(self, other):
        if self.diameter > other.diameter:
            return True
        elif self.diameter < other.diameter:
            return False
        else:
            print('Looks like these circles are the same size.')
    def make_list(self, *args):
        self.circle_list.append(self.diameter)
        self.circle_list.extend(arg.diameter for arg in args)
        srted_list = sorted(self.circle_list)
        return srted_list 


c1 = Circle(42)
c2 = Circle(36)
c3= Circle(23)
c4 = Circle(78)
print(c1.find_area())
print(c1)
combined = c1+c2
c1+=c3
print(c1)
print(combined)
print(c1.is_greater(c2))
print(c1.make_list(c2, c3, c4 ))
c1+=c4
print(c1)
