instruction_label = tk.Label(root, text="Select your choice:")
instruction_label.pack()

choices = ["Rock", "Paper", "Scissors"]
for choice in choices:
    button = tk.Button(root, text=choice, command=lambda choice=choice: on_button_click(choice))
    button.pack()

result_label = tk.Label(root, text="")
result_label.pack()
