S = input()
T = 'UCPC'
idx = 0

for s in S:
    if idx >= min(4, len(S)): break

    if s == T[idx]: idx += 1

print('I love UCPC' if idx == 4 else 'I hate UCPC')