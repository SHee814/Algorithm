import sys

N = int(input())
commands = [[int(t) for t in line.split()] for line in sys.stdin]
stack = []

for cmd in commands:
    match cmd[0]:
        case 1:
            stack.append(cmd[1])
        case 2:
            print(stack.pop() if stack else -1)
        case 3:
            print(len(stack))
        case 4:
            print(0 if stack else 1)
        case 5:
            print(stack[-1] if stack else -1)
            