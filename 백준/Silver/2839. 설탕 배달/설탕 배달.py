N = int(input())
idx_five = 0
mv = N

while idx_five * 5 <= N:
    idx_three = (N - (idx_five * 5)) // 3
    
    if (idx_three * 3 + idx_five * 5 == N):
        mv = min(mv, idx_three + idx_five)

    idx_five += 1
        
print(mv if mv != N else -1)