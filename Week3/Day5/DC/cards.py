import random

class Card():
    def __init__(self):
        self.suit = self.gen_suit()
        self.value = self.gen_val()
    def __str__(self):
        return f'This card is a {self.value} of {self.suit}'
    def gen_suit(self):
        suit_list = ["Hearts", "Diamonds", "Clubs", "Spades"]
        suit = random.choice(suit_list)
        return suit
    def gen_val(self):
        val_list = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        val = random.choice(val_list)
        return val

card1 = Card()
# print(card1)

class Deck():
    def __init__(self):
        self.deck = self.make_deck()
    def make_deck(self):
        deck_of_cards = []
        suit_list = ["Hearts", "Diamonds", "Clubs", "Spades"]
        val_list = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

        for suit in suit_list:
            for val in val_list:
                card = f'{val} of {suit}'
                deck_of_cards.append(card)
        return deck_of_cards
    def shuffle_deck(self):
        s_deck = random.sample(self.deck, len(self.deck))
        return s_deck
    def deal(self):
        for card in self.shuffle_deck():
            card_return = card 
            self.deck.remove(card)
            return f'Here is your card:\n{card_return} \nHere is a deck without that card: \n {self.deck}'
one = Deck()
print(one.deal())

#testing the .deal() function. It works. 
#Test by performing the deal() function with an instance of Deck() class
#eg one.deal(), get your card and copy the list into this function
# def test_deal(test_list):
#     test_list =[]
#     for word in test_list:
#         if '10 of Spades' == word:
#             print('Nope. The deck still has it.')
#         else:
#             print("A-Okay")
