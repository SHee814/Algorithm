N = int(input())
prime_numbers = [True for _ in range(N // 2 + 1)]

for i in range(2, N // 2 + 1):
    if not prime_numbers[i]:
        continue
        
    j = 2
    
    while i * j < N // 2 + 1:
        prime_numbers[i * j] = False
        j += 1

for i in range(2, N // 2 + 1):
    if prime_numbers[i]:
        while N % i == 0:
            print(i)
            N /= i

if N > 1:
    print(N)