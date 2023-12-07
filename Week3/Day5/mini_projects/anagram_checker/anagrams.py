from anagram_checker import AnagramChecker
class AnagramUI(AnagramChecker):
    def __init__(self, text_file):
        super().__init__(text_file)
    def show(self):
        print("Hey, there! Welcome to your anagram checker.") 
        active = True
        while active:
            user_input = input("Choose a word to get your anagrams: ")
            if user_input.lower() == 'q':
                    print("The program is over")
                    break
            else:
                if self.is_valid_word(user_input) == True:
                    anas = self.get_anagrams(user_input)
                    print(f'your word: "{user_input}" - is valid!')
                    print(f'Anagrams for your word:')        
                    print(f'--{anas}--')       
                else:
                    print("Please enter a valid word: ")
                    continue
                
    
a2 = AnagramUI("sowpodss.txt")
a2.show()