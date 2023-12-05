class Pagination():
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.size =pageSize
        self.current= 0
    def getVisibleItems(self):
        on_page = slice(self.current, self.current+self.size)
        return self.items[on_page]
    def nextPage(self):
        self.current+=self.size
        next_page = slice(self.current, self.current+self.size)
        return self.items[next_page]
    def previous_page(self):
        self.current -= self.size
        prev_page = slice(self.current-self.size, self.current)
        return self.items[prev_page]
    def first_page(self):
        self.current=0
        first_page = slice(0, self.size)
        return self.items[first_page]
    def last_page(self):
        self.current=len(self.items) - self.size
        last_page = slice(self.current, None)
        return self.items[last_page]
    def go_to_page(self):
        user_input = input(f'What page would you like to turn to?')
        total_pages = len(self.items) // self.size

        if 1 <= int(user_input) <= total_pages:
            self.current = (int(user_input) - 1) * self.size
            the_page = slice(self.current, self.current + self.size)
            print(self.items[the_page])
            return self.items[the_page]
            
        else:
            print(f'enter a num between 1-{total_pages}')



alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
# print(p.getVisibleItems())
# print(p.getVisibleItems())
p.nextPage()
# print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())
p.previous_page()
print(p.getVisibleItems())
p.previous_page()
print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())
p.nextPage()
p.nextPage()
p.nextPage()
print(p.getVisibleItems())
p.nextPage()
p.nextPage()
print(p.getVisibleItems())
print(p.first_page())
print(p.getVisibleItems())
p.last_page()
print(p.getVisibleItems())
p.go_to_page()
print(p.getVisibleItems())
p.previous_page()
print(p.getVisibleItems())



