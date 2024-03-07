from product.crud.persist import persist


def read():
    print('🟢 Read Function')
    persist("", operation="read");