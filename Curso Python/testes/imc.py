name = str(input('Qual seu nome? '))
h = float(input('Qual sua altura? '))
p = float(input('Qual seu peso? '))
r = p/(h*h)
print('Olá {}! Se seu peso for {} e sua altura {}. Seu Indice de Massa Muscular será de: {}'.format(name, p, h, r))

