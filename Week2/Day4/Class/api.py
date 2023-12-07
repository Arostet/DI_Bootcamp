import requests
import os, json

dir_path = os.path.dirname(os.path.realpath(__file__))


# response = requests.get("https://api.chucknorris.io/jokes/random")

# print(response)
# print(response.json())

data=[]
for i in range(11):
    response = requests.get("https://api.chucknorris.io/jokes/random")
    if response.status_code == 200:
        data.append(response.json())
# print(data)
# # print(dir_path)

with open("jokes.json", 'r') as file:
    json_data = json.load(file)

with open(dir_path + '/jokes.json', mode='a') as file:
    jokes = json_data
    jokes.extend(json.dump(data, file))

print(json_data[2]['value'])