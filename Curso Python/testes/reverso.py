import emoji
palavra = str(input('Insira uma palavra para ver o reverso: '))

print(emoji.emojize('O reverso de {} é "{}" :sunglasses: :imp: :smile_cat: :guardsman: :eyes:'.format(palavra, palavra[::-1]), use_aliases=True))
