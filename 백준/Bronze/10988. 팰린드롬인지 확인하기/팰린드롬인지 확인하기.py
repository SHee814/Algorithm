S = input()
flag = 1

for i in range(len(S) // 2):
    if S[i] == S[-i-1]: continue
    else:
        flag = 0
        break

print(flag)