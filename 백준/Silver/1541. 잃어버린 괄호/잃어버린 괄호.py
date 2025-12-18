S = input()
c1 = S.split('-')
c2 = [sum(map(int, c.split('+'))) for c in c1]
t = sum(c2) * -1 + c2[0] * 2
print(t)