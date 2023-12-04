class Door():
    def __init__(self, is_opened):
        self.open = is_opened
    def open_door(self):
        print(f'{self} door is open')
    def close_door(self):
        print(f'{self} door is closed')

class BlockedDoor(Door):
    def __init__(self, is_opened):
        super().__init__(is_opened)
    def open_door(self):
        raise Exception("blocked door can not be open or closed")
    
door1 = Door(False)

door1.open_door()

door2 = BlockedDoor(True)

door2.open_door()