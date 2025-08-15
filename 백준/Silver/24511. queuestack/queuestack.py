from collections import deque

N = int(input())
list_type = input().split()
queue = [deque([x]) for (i, x) in enumerate(input().split()) if list_type[i] == '0']
M = int(input())
C = input().split()
concatenated = deque()
result = []

for q in queue:
    concatenated.extendleft(q)

for c in C:
    concatenated.append(c)
    result.append(concatenated.popleft())
    
print(*result)