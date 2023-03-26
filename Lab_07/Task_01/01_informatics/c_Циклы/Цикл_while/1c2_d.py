n = int(input())

while n > 1:
    if n % 2 == 0:
        n //= 2
    else:
        print('NO')
        break
else:
    print('YES')
