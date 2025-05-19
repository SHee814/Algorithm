import sys

input = sys.stdin.read().rstrip().split('\n')

for str in input:
    if str == '.': break
    
    stack = []
    flag = True
    
    for i in str:
        if i == '(':
            stack.append(i)
        elif i == ')':
            if len(stack) > 0 and stack[len(stack) - 1] == '(':
                stack.pop()
            else:
                flag = False
                break
        elif i == '[':
            stack.append(i)
        elif i == ']':
            if len(stack) > 0 and stack[len(stack) - 1] == '[':
                stack.pop()
            else:
                flag = False
                break
    
    print('yes' if flag and len(stack) == 0 else 'no')