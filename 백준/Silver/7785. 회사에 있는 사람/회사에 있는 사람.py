import sys

input = sys.stdin.readlines()
S = set()

for line in input[1:]:
    name, event = line.split()
    
    if (event == 'enter'):
        S.add(name)
    else:
        S.discard(name)

print('\n'.join(sorted(S, reverse=True)))