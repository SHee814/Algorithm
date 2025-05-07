import sys

T = int(input())

for line in sys.stdin:
    R, S = line.rstrip().split()
    print(''.join([x * int(R) for x in S]))