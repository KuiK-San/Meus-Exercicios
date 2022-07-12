import emoji

att = float(input('Qual seu salário? R$'))
percent = float(att * 0.15)
new = float(att + percent)
print(emoji.emojize('O seu novo sálario com um acrécimo de 15% será de R${:.2f}! :thumbs_up:').format(new))
