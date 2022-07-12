import random

al01 = str(input('Qual o nome do primeiro aluno? '))
al02 = str(input('Qual o nome do segundo aluno? '))
al03 = str(input('Qual o nome do terceiro aluno? '))
al04 = str(input('Qual o nome do quarto aluno? '))
lista = [al01, al02, al03, al04]
random.shuffle(lista)

print('A lista de de alunos para apresentar é {}'.format(lista))
