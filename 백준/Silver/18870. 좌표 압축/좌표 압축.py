N = int(input())
coords = list(map(int, input().split()))
indexed = sorted(list(set(coords)))
compressed = {x: i for (i, x) in enumerate(indexed)}
print(' '.join(map(lambda x: str(compressed.get(x)), coords)))