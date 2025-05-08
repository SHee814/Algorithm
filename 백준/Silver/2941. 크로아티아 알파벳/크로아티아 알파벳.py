S = input()
croatian = ['c=', 'c-', 'dz=', 'd-', 'nj', 'lj', 's=', 'z=']
idx = 0
cnt = 0

while idx < len(S):
    if idx+1 < len(S) and S[idx : idx+2] in croatian:
        cnt += 1
        idx += 2
        continue
        
    if idx+2 < len(S) and S[idx: idx+3] in croatian:
        cnt += 1
        idx += 3
        continue
        
    cnt += 1
    idx += 1

print(cnt)