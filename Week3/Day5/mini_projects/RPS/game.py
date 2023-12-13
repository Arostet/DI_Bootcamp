import random
from tkinter import *
from tkinter import ttk


class Game():
    def __init__(self):
        self.user_wins = 0
        self.computer_wins = 0
        self.games_played = 0

        root = Tk()
        root.title("RPS Game")

        mainframe = ttk.Frame(root, padding="3 3 12 12")
        mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
        root.columnconfigure(0, weight=1)
        root.rowconfigure(0, weight=1)

        button = ttk.Button(root, command=self.play, text='play')
        button.pack()

        widget1 = StringVar()
        widget1_entry = ttk.Entry(mainframe, width=7, textvariable=widget1)
        widget1_entry.grid(column=2, row=1, sticky=(W, E))

        root.mainloop()

    def get_user_rps(self):
        while True:
            u_rps = input("It's your turn - Rock, Paper, Scissors, Shoot!\nSelect 'r', 'p', 's';\n'q' to quit: ").lower()
            if u_rps in ["r", "p", "s", "q"]:
                return u_rps
            else:
                print("Invalid input. Choose Again.")

    def get_computer_rps(self):
        return random.choice(["r", "p", "s"])

    def get_game_result(self, user_choice, computer_choice):
        if user_choice == 'q':
            return False
        
        print(f"COMPUTER: {computer_choice} versus YOU: {user_choice}")

        if computer_choice == user_choice:
            print("It's a tie!")
        elif (computer_choice == 'r' and user_choice == 's') or \
             (computer_choice == 's' and user_choice == 'p') or \
             (computer_choice == 'p' and user_choice == 'r'):
            print("Computer wins!")
            self.computer_wins += 1
        else:
            print("You win!")
            self.user_wins += 1

        self.games_played += 1
        return True  # Continue the game
    
    def show_leaderboard(self):
        print("Leaderboard:")
        print(f"Games Played: {self.games_played}")
        print(f"Your Wins: {self.user_wins}")
        print(f"Computer Wins: {self.computer_wins}")
        if self.computer_wins > self.user_wins:
            print('The Computer is victorious for now.')
        elif self.computer_wins < self.user_wins:
            print("You've proven yourself up to the challenge.")
        else:
            print("Teku.")

    def play(self):
        while True:
            user_choice = self.get_user_rps()
            computer_choice = self.get_computer_rps()
            if user_choice == 'q':
                print("Game ended. Thanks for playing!")
                self.show_leaderboard()  # Show the leaderboard before breaking
                break
            
            self.get_game_result(user_choice, computer_choice)
            self.show_leaderboard()


game = Game()
# game.play()
