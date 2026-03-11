n = int(input())

def F(x):
    if x < 2: return x
    
    return F(x-1) + F(x-2)

print(F(n))