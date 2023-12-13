import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

class MenuManager():
    def __init__(self):
        self.conn = psycopg2.connect(
        dbname=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASS'),
        host=os.getenv('DB_HOST'),
        port=os.getenv('DB_PORT')
)
        self.cur = self.conn.cursor()
    
    def get_by_name(self): 
        try:
            user_item = input("Select an item from the menu")
            self.cur.execute(f"Select item_name, item_price From menu_items WHERE item_name = '{user_item}'")
            rows = self.cur.fetchall()
            for row in rows:
                print(row)
        except:
            return None
    def all_items(self):
        self.cur.execute("Select * FROM menu_items")
        rows = self.cur.fetchall()
        for row in rows:
            print(row)
    def close_c_c(self):
         self.cur.close()
         self.conn.close()
manage = MenuManager()
# manage.get_by_name()
manage.all_items()