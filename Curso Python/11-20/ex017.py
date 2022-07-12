import math

cat_o = float(input('Digite o valor do cateto oposto: '))
cat_a = float(input('Digite o valor do cateto adjacente: '))
hip = math.hypot(cat_a, cat_o)

print('O valor da hipotenusa quando o cateto oposto é de {:.0f} e o cateto adjacente é de {:.0f} é {:.2f}'
      .format(cat_o, cat_a, hip))
