att = float(input('Qual o preço atual do produto? R$'))
percent = float(att * 0.05)
new = float(att - percent)
print('O novo preço é de R${:.2f} reais com 5% de desconto'.format(new))
