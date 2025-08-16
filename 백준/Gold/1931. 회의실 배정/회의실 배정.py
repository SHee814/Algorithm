import sys

N = int(input())
meetings = sorted(
    map(lambda x: list(map(int, x.split())), sys.stdin.readlines()),
    key=lambda x: (x[1], x[0])
)
et = 0
count = 0

for m in meetings:
    s, e = m

    if s >= et:
        et = e
        count += 1

print(count)