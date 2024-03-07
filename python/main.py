from product.crud.create import create
from product.crud.delete import delete
from product.crud.update import update
from product.crud.read import read


ANSWERS = ('yes','no',)


def question_maker(specific, start = 'Voulez-vous ...'):
    return start + specific


def question_handler(question, answers):
    if(question and answers):
        answer = input(question)
        if answer in answers:
            if answer == 'yes':
                return True 
            return False

def main():
    print('🟢 Main Function')
    create_answer = question_handler(question_maker('créer un produit [yes/non]'), ANSWERS)
    if create_answer == True:
        create()
        return
    delete_answer = question_handler(question_maker('supprimer un produit [yes/no]'), ANSWERS)
    if delete_answer == True: 
        delete()
        return
    update_anwer = question_handler(question_maker('mettre à jour un produit [yes/no]'), ANSWERS)
    if update_anwer == True:
        update()
        return
    read_answer = question_handler(question_maker('voir tous les produits [yes/no]'), ANSWERS)
    if read_answer == True: 
        read()
        return
    
    
    


main()
