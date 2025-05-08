import sys

N = int(input())
cnt = 0

for line in sys.stdin:
    word = line.rstrip()
    dictionary = {}
    flag = True
    
    for i, x in enumerate(word):
        if not flag: break
            
        if x not in dictionary:
            dictionary[x] = i
        else:
            flag = abs(dictionary[x] - i) < 2
            dictionary[x] = i
            
    if flag:
        cnt += 1

print(cnt)