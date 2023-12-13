import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

# db_name = os.getenv('DB_NAME')
# db_user = os.getenv('DB_USER')
# db_password = os.getenv('DB_PASS')
# db_host = os.getenv('DB_HOST')
# db_port = os.getenv('DB_PORT')

# Establish a connection
conn = psycopg2.connect(
    dbname=os.getenv('DB_NAME'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASS'),
    host=os.getenv('DB_HOST'),
    port=os.getenv('DB_PORT')
)
#CREATE A CURSOR OBJECT TO EXECUTE SQL QUERIES
cur = conn.cursor()

#CRUD Create Read Update Delete

#INSERT query
# insert_query = 'INSERT INTO products (username, price) VALUES (%s, %s)'
# data_to_insert = ('iKey', 750)
# cur.execute(insert_query, data_to_insert)
# cur.execute('INSERT INTO products (name, price) VALUES (%s, %s)', ('iKey', 750))

#update
# cur.execute("UPDATE products SET username = 'iBimney' WHERE user_id = 8")
# conn.commit()

#delete
cur.execute("DELETE FROM products WHERE user_id = 8")
conn.commit()

# #EXECUTE a SELECT query
cur.execute("SELECT * FROM products")
rows=cur.fetchall()
print(rows)
# for row in rows:
#     print(row)

#Close the cursor and the connection
cur.close()
conn.close()