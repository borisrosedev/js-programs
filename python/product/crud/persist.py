from pathlib import Path 
import json

FILE_PATH = Path('./src/js/data/data_sources/local_data_sources/local-products.json')

def isFile():
    return FILE_PATH.exists()

def persist(data = "", operation="create"):
    if isFile():
        try:
            with open(FILE_PATH, 'r+', encoding='utf8') as file:
                products = json.load(file)
            if operation == "read":
                print(products)
                return
        except PermissionError:
            return "Not allowed to access this file" 
        except json.decoder.JSONDecodeError:
            print('Le fichier est vide')
            products = []
        
        if operation == "create":
            print(data.url)
            products.append({'name': data.name, 'url': data.url, 'price': data.price})

            try:
                with open(FILE_PATH, 'w') as file:
                    json.dump(products, file, indent=4, ensure_ascii=True)
            except Exception as e:
                print('Error while saving the product:', e)