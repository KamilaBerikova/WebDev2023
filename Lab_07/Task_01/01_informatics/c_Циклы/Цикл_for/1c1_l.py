num = input()
decimal_num = 0

for i in range(len(num)):
    decimal_num += int(num[-(i+1)]) * 2**i

print(decimal_num)
