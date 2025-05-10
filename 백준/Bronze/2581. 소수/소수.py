min = int(input())
max = int(input())
prime_numbers = [True for _ in range(max + 1)]
prime_numbers[0] = False
prime_numbers[1] = False

for i in range(2, max + 1):
    if not prime_numbers[i]:
        continue
        
    j = 2
    
    while i * j <= max:
        prime_numbers[i * j] = False
        j += 1

min_prime_number = -1
sum_prime_number = 0
        
for i in range(min, max + 1):
    if prime_numbers[i]:
        sum_prime_number += i
        
        if min_prime_number < 0:
            min_prime_number = i
            
if min_prime_number < 0:
    print(-1)
else:
    print(f'{sum_prime_number}\n{min_prime_number}')