import sys

set_x = set()
set_y = set()

for row in sys.stdin.readlines():
    x, y = map(int, row.split())
    
    if x in set_x:
        set_x.remove(x)
    else:
        set_x.add(x)
        
    if y in set_y:
        set_y.remove(y)
    else:
        set_y.add(y)

print(f'{next(iter(set_x))} {next(iter(set_y))}')