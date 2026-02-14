S = input().strip()
subset = set()

for i in range(len(S)):
    for j in range(i, len(S)):
        sub = S[i:j+1]
        subset.add(sub)
        
print(len(subset))
        