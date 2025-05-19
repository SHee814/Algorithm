N = int(input())
line = list(reversed(list(map(int, input().split()))))
wait = []

for i in range(1, N + 1):
    if len(wait) > 0 and wait[-1] == i:
        wait.pop()
        continue

    while len(line) > 0 and line[-1] != i:
        wait.append(line.pop())

    if len(line) == 0:
        print('Sad')
        exit()

    if line[-1] == i:
        line.pop()

print('Nice')