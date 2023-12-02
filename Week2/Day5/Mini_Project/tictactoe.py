active = True
#Fuction to draw the board using a f-strings to access dictionary
#so now the values can be edited
def display_board(spots):
    board = ("*******\n"
            f'*{spots[1]}|{spots[2]}|{spots[3]}*\n'
             f'*{spots[4]}|{spots[5]}|{spots[6]}*\n'
             f'*{spots[7]}|{spots[8]}|{spots[9]}*\n'
             "*******"
    )
    print(board)
#Create the dictionary that can acces each position on the board
spots = {1: '1', 2: '2', 3: '3', 
         4: '4', 5: '5', 6: '6', 
         7: '7', 8: '8', 9: '9'  }

# display_board(spots)

#create turns
turn = 0
def user_turn(turn):
    if turn % 2 == 0:
        mark = 'X'
    else:
        mark = 'O'
    return mark

#create victory
def victory(spots):
    global active
    victor = user_turn(turn)
    if spots[1] == spots[2] ==spots[3]:
        print(f"Game Over! {victor} - you win!")
        active = False
    elif spots[4] == spots[5] ==spots[6]:
        print(f"Game Over! {victor} - you win!")
        active=False
    elif spots[7] == spots[8] ==spots[9]:
        print(f"Game Over! {victor} - you win!")
        active=False
    elif spots[1] == spots[4] ==spots[7]:
        print(f"Game Over! {victor} - you win!")
        active=False
    elif spots[2] == spots[5] ==spots[8]:
        print(f"Game Over! {victor} - you win!")
        active=False    
    elif spots[3] == spots[6] ==spots[9]:
        print(f"Game Over! {victor} - you win!")
        active=False
    elif spots[1] == spots[5] ==spots[9]:
        print(f"Game Over! {victor} - you win!")
        active=False
    elif spots[7] == spots[5] ==spots[3]:
        print(f"Game Over! {victor} - you win!")
        active=False

player_wins = {'X': 0, 'O': 0}

def display_leaderboard():
    print("\nLeaderboard:")
    print(f"Player X: {player_wins['X']} wins")
    print(f"Player O: {player_wins['O']} wins")

def play(turn):
    global active
    global spots  # Make spots global so it can be modified

    active = True  # Reset the game state at the beginning of each game

    while active:
        victory(spots)
        display_board(spots)
        choice = input("Make your move. Press a number 1-9 (enter 'q' to quit): ")
        if choice.lower() == 'q':
            break
        elif not choice.isdigit() or int(choice) < 1 or int(choice) > 9:
            print("Not gonna work. Please enter a number between 1 and 9 or 'q' to quit.")
            continue

        for i, y in spots.items():
            val = user_turn(turn)
            if int(choice) == i:
                if y != 'X' and y != 'O':
                    spots.update({i: val})
                    turn += 1
                else:
                    print("Spot taken, choose again!")
                    break  # Break out of the for loop, but continue the while loop

        # Check for victory after the move
        if active:
            victory(spots)

    # Display the final board after the game ends
    display_board(spots)

    if active:  # Only print the "Game Over" message if the game is still active
        victor = user_turn(turn)
        print(f"Game Over. {victor} wins! Thanks for playing!")
        player_wins[victor] += 1
        display_leaderboard()

    # Reset the board for the next game
    spots = {1: '1', 2: '2', 3: '3', 
             4: '4', 5: '5', 6: '6', 
             7: '7', 8: '8', 9: '9'  }

# Run multiple games
while True:
    play(turn)
    display_leaderboard()
    replay = input("Do you want to play again? (yes/no): ")
    if replay.lower() != 'yes':
        break

play(turn)