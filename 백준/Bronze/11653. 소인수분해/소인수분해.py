N = int(input())
i = 2

while N > 1:
    if N % i == 0:
        print(i)
        N /= i
        continue
        
    i += 1