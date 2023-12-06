import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Parse the JSON string into a Python dictionary
data = json.loads(sampleJson)
#Access salary - it is nested in layers
salary = data["company"]["employee"]["payable"]["salary"]
print(salary)
data['company']['employee']['birth_date'] = ''
print(data)

new_file_path = 'new_path.json'
with open(new_file_path, 'w') as new_file:
    json.dump(data, new_file, indent=2)

new_file_path_2 = 'new_math.json'
with open(new_file_path_2, 'w') as new_file:
    json.dump(data, new_file, indent=3)
print(f"Saved to {new_file_path}")
print(f"Saved to {new_file_path_2}")

