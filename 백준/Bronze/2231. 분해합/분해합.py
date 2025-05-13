N = int(input())

for i in range(1, N):
    digits = map(int, list(str(i)))
    
    if sum(digits) + i == N:
        print(i)
        exit()

print(0)