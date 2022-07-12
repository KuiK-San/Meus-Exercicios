larg = float(input('Qual a largura da parede? (em metros) '))
alt = float(input('Qual a altura da parede? (em metros) '))
area = larg * alt
tinta = area / 2
print('Você irá precisar de {:.1f} litros de tinta para pintar uma parede com a area de {:.1f} m²'.format(tinta, area))
