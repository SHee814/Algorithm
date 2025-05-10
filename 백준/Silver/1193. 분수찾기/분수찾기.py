N = int(input())
line = 0
sum = 0

while sum < N:
    line += 1
    sum += line

idx = sum - N

if line % 2 > 0:
    print(f'{idx+1}/{line-idx}')
else:
    print(f'{line-idx}/{idx+1}')
