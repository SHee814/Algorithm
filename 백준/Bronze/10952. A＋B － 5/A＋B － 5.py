import sys

for line in sys.stdin:
    a, b = map(int, line.rstrip().split())
    
    if a + b == 0: break
        
    print(a + b)