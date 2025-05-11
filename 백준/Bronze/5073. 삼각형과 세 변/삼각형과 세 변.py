import sys

for line in sys.stdin:
    sides = list(map(int, line.rstrip().split()))
    sides.sort()
    sides.reverse()
    a, b, c = sides
    
    if a + b + c == 0:
        break;
    
    if a >= b + c:
        print('Invalid')
        continue

    if a == b == c:
        print('Equilateral')
    elif a == b or b == c or c == a:
        print('Isosceles')
    else:
        print('Scalene')