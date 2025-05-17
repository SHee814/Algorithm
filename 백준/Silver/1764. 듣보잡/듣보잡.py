import sys

input = sys.stdin.read().split('\n')

N, M = map(int, input[0].split())
set_n = set(input[1:N + 1])
set_m = set(input[N + 1:])
union = list(set_n & set_m)

print(len(union))
print('\n'.join(sorted(union)))
