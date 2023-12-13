import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

class DbQuery():
    def __init__(self) -> None:
        self.conn = psycopg2.connect(
        dbname=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASS'),
        host=os.getenv('DB_HOST'),
        port=os.getenv('DB_PORT')
)
        self.cur = self.conn.cursor()

    def run_function(self):
                while True:
                    self.user_input = input("What command do you want to run? (0 to exit \n 1 for VALUES \n 2 for DELETE \n 3 for ADD ")
                    if self.user_input == '0':
                        print("Exiting.")
                        break
                    elif self.user_input == '1':
                        self.cur.execute("SELECT * FROM user_management")
                        rows = self.cur.fetchall()
                        for row in rows:
                            print(row)
                    elif self.user_input == '2':
                        u_value = input("Which user are you looking to delete?")
                        self.cur.execute(f"DELETE FROM user_management WHERE id = {u_value}")
                        self.conn.commit()
                    elif self.user_input == '3':
                        u_name = input("What is the username?")
                        email = input("What is user email?")
                        age = input("What is user age?")
                        insert_query = 'INSERT INTO user_management (username, email, age) VALUES (%s, %s, %s)'
                        data_to_insert = (u_name, email, age)
                        self.cur.execute(insert_query, data_to_insert) 
                        self.conn.commit()   
                    elif self.user_input == '4':
                        pass
      

                self.close_c_c()

    def close_c_c(self):
        self.cur.close()
        self.conn.close()


test = DbQuery()
test.run_function()