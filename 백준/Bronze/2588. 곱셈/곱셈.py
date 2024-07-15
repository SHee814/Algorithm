import sys

a = int(sys.stdin.readline())
b = int(sys.stdin.readline())
print(f"{a*(b%10)}\n{a*((b%100//10))}\n{a*(b//100)}\n{a*b}")