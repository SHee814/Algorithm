def reversed(x):
    nx = list(x)
    nx.reverse()
    return ''.join(nx)

A, B = map(lambda x: int(reversed(x)), input().split())
print(max(A, B))