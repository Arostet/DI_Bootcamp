import random
from tkinter import *
from tkinter import ttk

class RPSGame():
    def __init__(self):
        self.user_wins = 0
        self.computer_wins = 0
        self.games_played = 0

        self.root = Tk()
        self.root.title("RPS Game")

        self.mainframe = ttk.Frame(self.root, padding="3 3 12 12")
        self.mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)

        # Buttons for Rock, Paper, Scissors
        self.rock_button = ttk.Button(self.mainframe, text="Rock", command=lambda: self.play('r'))
        self.rock_button.grid(column=1, row=1)
        self.paper_button = ttk.Button(self.mainframe, text="Paper", command=lambda: self.play('p'))
        self.paper_button.grid(column=2, row=1)
        self.scissors_button = ttk.Button(self.mainframe, text="Scissors", command=lambda: self.play('s'))
        self.scissors_button.grid(column=3, row=1)

        #Quit Button
        self.quit_button = ttk.Button(self.mainframe, text="Quit", command=self.quit_game)
        self.quit_button.grid(column=4, row=4)

        #Previous Game Display
        self.prev_game_label = ttk.Label(self.mainframe, text="")
        self.prev_game_label.grid(column=2, row=4, columnspan=3)
        
        #Leaderboard Display
        self.leaderboard_label = ttk.Label(self.mainframe, text="")
        self.leaderboard_label.grid(column=2, row=4, columnspan=3)

        self.result_label = ttk.Label(self.mainframe, text="")
        self.result_label.grid(column=1, row=2, columnspan=3)

        self.leaderboard_label = ttk.Label(self.mainframe, text="")
        self.leaderboard_label.grid(column=2, row=3, columnspan=2)

        self.root.mainloop()

    def get_computer_rps(self):
        return random.choice(["r", "p", "s"])

    def update_game_result(self, user_choice, computer_choice):
        update_text = f"COMPUTER: {computer_choice.upper()} versus YOU: {user_choice.upper()}\n"
        if user_choice == computer_choice:
            update_text += "It's a tie!"
        elif (computer_choice == 'r' and user_choice == 's') or \
             (computer_choice == 's' and user_choice == 'p') or \
             (computer_choice == 'p' and user_choice == 'r'):
            update_text += "Computer wins!"
            self.computer_wins += 1

        else:
            update_text += "You win!"
            self.user_wins += 1


        self.result_label.config(text=update_text)
        self.games_played +=1
    
    def quit_game(self):
        print("Game ended. Thanks for playing!")
        self.show_leaderboard()  # Show the leaderboard
        self.root.destroy()  # This will close the GUI window

    def update_leaderboard(self):
        leaderboard_text = f"Games Played: {self.games_played}\n" \
                           f"Your Wins: {self.user_wins}\n" \
                           f"Computer Wins: {self.computer_wins}"
        if self.computer_wins > self.user_wins:
            leaderboard_text += "\nThe Computer is victorious for now."
        elif self.computer_wins < self.user_wins:
            leaderboard_text += "\nYou've proven yourself up to the challenge."
        else:
            leaderboard_text += "\nIt's a tie."
        
        self.leaderboard_label.config(text=leaderboard_text)
    def play(self,user_choice):
        #REMOVED WHILE LOOP TO HANDLE PLAY AS AN EVENT INSTEAD OF A LOOP FOR TKINTER
        computer_choice = self.get_computer_rps()
        self.update_game_result(user_choice, computer_choice)

        # self.get_game_result(user_choice, computer_choice)
        self.update_leaderboard() #DELETED show_..()


game = RPSGame()
# game.play()
