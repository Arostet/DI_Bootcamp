class Text():
    def __init__(self, string) -> None:
        self.string = string
    def word_frequency(self):
        words = self.string.split()

        # Create a dictionary to store word frequencies
        word_frequency_dict = {}
        for word in words:
            word_frequency_dict[word] = word_frequency_dict.get(word, 0) + 1
        most_frequent_word = max(word_frequency_dict, key=word_frequency_dict.get)
        frequency = word_frequency_dict[most_frequent_word]

        return f'Here is the breakdown of words and their frequency: \n {word_frequency_dict}'
    def most_frequent_word(self):
        # Split the text into words
        words = self.string.split()

        # Create a dictionary to store word frequencies
        word_frequency_dict = {}
        for word in words:
            word_frequency_dict[word] = word_frequency_dict.get(word, 0) + 1
        most_frequent_word = max(word_frequency_dict, key=word_frequency_dict.get)
        frequency = word_frequency_dict[most_frequent_word]

        return most_frequent_word, frequency
    def what_unique(self):
        words = self.string.split()
        word_frequency_dict = {}
        unique_list =[]
        for word in words:
            word_frequency_dict[word] = word_frequency_dict.get(word, 0) + 1
        for x,y in word_frequency_dict.items():
            if y == 1:
                unique_list.append(x)
            else:
                continue
        return unique_list
    
    @classmethod
    def from_file(cls, new_file):
        with open(new_file, 'r') as file:
            file_content = file.read()
        return cls(file_content)

new_instance = Text.from_file('/Users/Micha/Documents/Programming/DI_Bootcamp/Week3/Day4/DC/the_stranger.html')
print(new_instance.most_frequent_word())
        


        
t1 = Text("A good book would sometimes cost as much as a good house.")
print(t1.most_frequent_word())        
print(t1.word_frequency())
print(t1.what_unique())
print(new_instance.word_frequency())

