dia = int(input('Quantos dias o carro foi alugado? '))
km = float(input('Quantos km foram rodados? '))
f = (60 * dia) + (0.15 * km)

print('O valor a ser pago é de: R${:.2f}'.format(f))
