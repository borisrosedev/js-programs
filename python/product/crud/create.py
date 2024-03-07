from product.models.product import Product
from product.crud.persist import persist



def create():
    print('🟢 Create Function')
    name = input('Nom du produit')
    url = input('URL du produit')
    price = int(input('Prix du produit'))
    newProduct = Product(name=name, url=url, price=price)
    newProduct.display_product_info()
    persist(newProduct, operation="create")
    print('Creation terminée')
