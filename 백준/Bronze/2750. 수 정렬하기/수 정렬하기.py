N = int(input())
list = []

for _ in range(N):
    n = int(input())
    
    if len(list) < 1:
        list.append(n)
        continue
    
    idx = 0
    
    while idx < len(list) and list[idx] < n:
        idx += 1
        
    list.insert(idx, n)

print('\n'.join(map(str, list)))
        