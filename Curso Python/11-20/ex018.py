import math

ang = float(input('insira um angulo: '))
sen = float(math.sin(math.radians(ang)))
cos = float(math.cos(math.radians(ang)))
tan = float(math.tan(math.radians(ang)))

print('Em um angulo de {} \no seno é de {:.2f} \no cosseno é de {:.2f}\no tangente é {:.2f}'.format(ang, sen, cos, tan))
