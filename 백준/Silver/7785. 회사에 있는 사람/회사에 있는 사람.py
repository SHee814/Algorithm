N = int(input())
S = set()

for _ in range(N):
    name, act = input().split()

    if act == 'enter':
        S.add(name)
    
    if act == 'leave' and name in S:
        S.remove(name)

print('\n'.join(reversed(sorted(list(S)))))