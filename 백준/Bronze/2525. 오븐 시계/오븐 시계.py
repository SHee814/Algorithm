H, M = map(int, input().split())
T = int(input())
S = M + T

if S >= 60:
    H = int((H + (S / 60)) % 24)
    M = (M + T) % 60
else:
    M = S
    
print(H, M)