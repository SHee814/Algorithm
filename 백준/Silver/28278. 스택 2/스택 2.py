import sys

input = sys.stdin.read().rstrip().split('\n')
N = int(input[0])
stack = []

for i in range(1, N + 1):
    line = list(map(int, input[i].split()))
    
    if line[0] == 1:
        stack.append(line[1])
    elif line[0] == 2:
        print(stack.pop() if len(stack) else -1)
    elif line[0] == 3:
        print(len(stack))
    elif line[0] == 4:
        print(1 if len(stack) == 0 else 0)
    elif line[0] == 5:
        print(stack[len(stack) - 1] if len(stack) > 0 else -1)
    