import sys
input = sys.stdin.read().split('\n')

N, M = map(int, input[0].split())
dictionary = {}

for i in range(1, N + 1):
    name = input[i]
    dictionary[name] = i
    dictionary[str(i)] = name

    
for j in range(N + 1, N + M + 1):
    q = input[j]
    print(dictionary[q])