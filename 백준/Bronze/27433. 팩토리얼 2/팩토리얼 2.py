N = int(input())

def F(x):
    if x <= 1:
        return 1
    
    return x * F(x-1)

print(F(N))