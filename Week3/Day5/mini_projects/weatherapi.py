import requests

api_key = 'c753d229022c2f9f831a4620953a9e71'
city = input("Enter city name: ")
url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    temp_k = data['main']['temp']
    temp_c = int(temp_k) - 273
    desc = data['weather'][0]['description']
    print(f"Today, we've got {desc} and a temp of {temp_c} Celcius.")
else:
    print('Error fetching weather data')    