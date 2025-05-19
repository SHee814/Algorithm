N = int(input())

for _ in range(N):
    PS = input()
    cnt = 0
    
    for i in PS:
        if i == '(':
            cnt += 1
        else:
            cnt -= 1
            
        if cnt < 0: break

    print('YES' if cnt == 0 else 'NO')