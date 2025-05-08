pieces = map(int, input().split())
full_pieces = [1, 1, 2, 2, 2, 8]
print(' '.join([str(i - j) for i, j in zip(full_pieces, pieces)]))