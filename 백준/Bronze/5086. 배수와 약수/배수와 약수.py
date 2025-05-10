import sys

for line in sys.stdin:
    A, B = map(int, line.rstrip().split())
    
    if A + B == 0: break
    
    if A % B == 0: print('multiple')
    elif B % A == 0: print('factor')
    else: print('neither')