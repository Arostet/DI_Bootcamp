class AnagramChecker():
    def __init__(self, text_file):
        self.text_file = text_file
        self.words = self.text_file_load()
    def text_file_load(self):
        words = []
        with open(self.text_file, 'r') as file:
            for line in file:
                word_list = line.split()
                words.extend(word_list)
        return [word.lower() for word in words]
        
    def is_valid_word(self, user_word):
        return user_word.lower() in self.words 
    #figured out the logic for the anagram and now don't need this function
    #used logic as if statement in get_anagrams
    # def is_anagram(self, word1, word2):
    #     if sorted(word1.lower()) == sorted(word2.lower()):
    #         return True
    #     else:
    #         return False
    def get_anagrams(self, user_word):
        ana_list = []
        for word in self.words:
            if sorted(user_word.lower()) == sorted(word.lower()):
                ana_list.append(word)
        return ", ".join(ana_list)


a1 = AnagramChecker("sowpodss.txt")
    
print(a1.is_valid_word("boy"))
print(a1.is_valid_word("pant"))
print(a1.is_valid_word("joybot"))
# print(a1.is_anagram("chocolate", "colatecho"))
# print(a1.is_anagram("chocolate", "pickle"))
print(a1.get_anagrams("pike"))
print(a1.get_anagrams("smoke"))
    
                
