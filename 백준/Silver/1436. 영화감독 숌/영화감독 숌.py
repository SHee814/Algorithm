N = int(input())
count = 0
idx = 665

while count < N:
    idx += 1

    if str(idx).find('666') >= 0:
        count += 1

print(idx)