import sys

a,b,c,d,e,f = map(int, input().split())

for x in range(1000):
    for y in range(1000):
        S = [[x,y],[x,-y],[-x,y],[-x,-y]]
        
        for s in S:
            if a * s[0] + b * s[1] == c and d * s[0] + e * s[1] == f:
                print(s[0], s[1])
                sys.exit()