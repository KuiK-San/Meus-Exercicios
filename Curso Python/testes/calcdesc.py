import emoji

value = float(input('Qual o valor atual do produto? R$'))
desc = float(input('Qual a porcentagem de desconto? '))
percent = float(desc / 100)
now = float(value * percent)
new = float(value - now)

print(emoji.emojize('O novo valor com {}% de desconto será de R${:.2f}! :sunglasses:').format(desc, new))
