N, k = map(int, input().split())
ranking = sorted(map(int, input().split()), reverse = True)
print(ranking[k - 1])