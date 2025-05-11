X = []
Y = []

for _ in range(3):
    x, y = map(int, input().split())
    X.append(x)
    Y.append(y)

if X[0] == X[1]:
    nx = X[2]
elif X[0] == X[2]:
    nx = X[1]
else:
    nx = X[0]
    
if Y[0] == Y[1]:
    ny = Y[2]
elif Y[0] == Y[2]:
    ny = Y[1]
else:
    ny = Y[0]

print(f'{nx} {ny}')