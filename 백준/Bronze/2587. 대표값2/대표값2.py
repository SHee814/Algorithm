sum = 0
list = []

for _ in range(5):
    n = int(input())
    sum += n
    idx = 0
    
    while idx < len(list) and list[idx] < n:
        idx += 1

    list.insert(idx, n)

print(sum // 5)
print(list[2])