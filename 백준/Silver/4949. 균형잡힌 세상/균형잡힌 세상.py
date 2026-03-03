import sys

for line in sys.stdin.read().splitlines():
    if line == '.':
        break

    stack = []
    to_x = {'(':-1, ')':1, '[':-2, ']':2}
    flag = True
    
    for s in line:
        if s not in to_x:
            continue
            
        x = to_x[s]
        
        if x < 0:
            stack.append(x)
        else:
            if stack:
                y = stack[-1]
                
                if x + y != 0:
                    flag = False
                    break
                else:
                    stack.pop()
            else:
                flag = False
                break
                    
    print('yes' if (not stack and flag) else 'no')