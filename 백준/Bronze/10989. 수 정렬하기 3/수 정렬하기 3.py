N = int(input())
cnt = [0 for _ in range(10000)]

for _ in range(N):
    n = int(input())
    cnt[n - 1] += 1

for i in range(10000):
    for _ in range(cnt[i]):
        print(i + 1)