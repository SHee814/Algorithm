N = int(input())
Q = [int(x) for x in input().split()[::-1]]
stack = []

for i in range(1, N+1):
    flag = True
    
    if stack and stack[-1] == i:
        stack.pop()
        continue
    
    while Q and Q[-1] != i:
        stack.append(Q.pop())
    
    if Q:
        Q.pop()
    else:
        flag = False
        break
        
print('Nice' if flag else 'Sad')