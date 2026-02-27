import sys

N = int(input())

for line in sys.stdin:
    stack = 0
    
    for x in line.strip():
        stack += 1 if x == '(' else -1
        if stack < 0: break;
        
    print('YES' if stack == 0 else 'NO')