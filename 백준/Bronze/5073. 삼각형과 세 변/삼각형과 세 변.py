import sys

for row in sys.stdin.readlines():
    x, y, z = sorted(map(int, row.split()))
    if x + y + z == 0:
        break
        
    if x + y <= z:
        print("Invalid")
    elif x == y and y == z and z == x:
        print("Equilateral")
    elif x != y and y != z and z != x:
        print("Scalene")
    else:
        print("Isosceles")