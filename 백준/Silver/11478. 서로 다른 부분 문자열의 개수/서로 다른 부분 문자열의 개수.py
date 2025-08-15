S = input()
nS = len(S)
substring = set()

for i in range(nS):
    for j in range(i+1, nS+1):
        substring.add(S[i:j])

print(len(substring))