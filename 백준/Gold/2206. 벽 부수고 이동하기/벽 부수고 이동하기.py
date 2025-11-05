import sys
from collections import deque

N, M = map(int, input().split())
maze = [[],[]]

for row in sys.stdin.readlines():
    maze[0].append([0 if v == '0' else -1 for v in row])
    maze[1].append([0 if v == '0' else -1 for v in row])

queue = deque([(0,0,0)])
maze[0][0][0] = 1
maze[1][0][0] = 1
dn = [0, 0, 1, -1]
dm = [1, -1, 0, 0]

while queue:
    ct, cn, cm = queue.popleft()
    
    for i in range(4):
        nn = cn + dn[i]
        nm = cm + dm[i]
        
        if (nn < 0 or nn >= N or nm < 0 or nm >= M):
            continue
        
        next_position = maze[0][nn][nm]
        next_position_broken = maze[1][nn][nm]
        current_position = maze[ct][cn][cm]
        
        if ct == 1 and next_position_broken == 0:
            maze[ct][nn][nm] = current_position + 1
            queue.append((ct, nn, nm))
            continue
            
        if ct == 0:
            if next_position == 0:
                maze[ct][nn][nm] = current_position + 1
                queue.append((ct, nn, nm))
                continue
            
            if next_position == -1:
                maze[ct+1][nn][nm] = current_position + 1
                queue.append((ct+1, nn, nm))

result = [v for v in [maze[0][N-1][M-1], maze[1][N-1][M-1]] if v > 0]
print(min(result) if result else -1)