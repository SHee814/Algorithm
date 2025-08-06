max = -1

for i in range(0, 9):
    row = list(map(int, input().split()))
    
    for j in range(0, 9):
        if (row[j] >= max):
            r = i + 1
            c = j + 1
            max = row[j]
            
print(max)
print(r, c)