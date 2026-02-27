import sys

K = int(input())
stack = []

for x in sys.stdin:
    if (int(x)) > 0:
        stack.append(int(x))
    else: stack.pop()

print(sum(stack))