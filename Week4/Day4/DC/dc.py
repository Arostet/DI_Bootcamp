import requests 
import random
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

class LoadCountries():
    def __init__(self) -> None:
        self.conn = psycopg2.connect(
            dbname=os.getenv('DB_NAME'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASS'),
            host=os.getenv('DB_HOST'),
            port=os.getenv('DB_PORT')
        )
        self.cur = self.conn.cursor()
    
    def get_countries(self):
        response = requests.get('https://restcountries.com/v3.1/all')
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception("Failed to get countries")
    
    def write_to_db(self, countries):
        for country in countries:
            insert_query = 'INSERT INTO countries (country_name) VALUES (%s)'
            data_to_insert = (country['name']['official'],)
            self.cur.execute(insert_query, data_to_insert) 
            self.conn.commit()   

    def main(self):
        try:
            all_countries = self.get_countries()
            random_countries = random.sample(all_countries, 10) 
            self.write_to_db(random_countries)
            print("10 random countries have been written to the database.")
        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            self.close_c_c()
    def close_c_c(self):
         self.cur.close()
         self.conn.close()

# Create an instance of the class and run the main method
test = LoadCountries()
test.main()
