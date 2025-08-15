N = int(input())

def factorial(x):
    if x < 2:
        return 1
    return x * factorial(x-1)

print(factorial(N))