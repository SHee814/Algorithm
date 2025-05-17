S = input()
set_substring = set()

for i in range(len(S)):
    for j in range(i + 1, len(S) + 1):
        substring = S[i:j]
        
        if substring not in set_substring:
            set_substring.add(substring)

print(len(set_substring))