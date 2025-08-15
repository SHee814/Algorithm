N = int(input())

def fibonacci(x):
    if x < 2:
        return x
    return fibonacci(x-1) + fibonacci(x-2)

print(fibonacci(N))