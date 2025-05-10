N = int(input())
nums = map(int, input().split())
cnt = 0

for x in nums:
    if x < 2:
        continue

    flag = 1
        
    for i in range(2, x // 2 + 1):
        if x % i == 0:
            flag = 0
            break
            
    cnt += flag

print(cnt)