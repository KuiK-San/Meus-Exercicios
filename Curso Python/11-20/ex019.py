import random

al01 = str(input('Qual o nome do primeiro aluno? '))
al02 = str(input('Qual o nome do segundo aluno? '))
al03 = str(input('Qual o nome do terceito aluno? '))
al04 = str(input('Qual o nome do quarto aluno? '))
sort = random.choice([al01, al02, al03, al04])

print('O aluno que irá apagar o quadro será o/a {}'.format(sort))
