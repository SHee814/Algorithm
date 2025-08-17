T = int(input())

for _ in range(T):
    V, E = map(int, input().split())
    C = [[] for _ in range(V)]
    G = {}
    isBipartite = True

    for _ in range(E):
        s, e = map(int, input().split())
        C[s-1].append(e-1)
        C[e-1].append(s-1)

    for v in range(V):
        if isBipartite == False:
            break
        if v in G:
            continue
            
        G[v] = True
        stack = [v]

        while isBipartite and len(stack) > 0:
            cn = stack.pop()

            for nn in C[cn]:
                if nn in G:
                    if G[nn] == G[cn]:
                        isBipartite = False
                        break
                    else: continue

                G[nn] = not G[cn]
                stack.append(nn)
    
    print('YES' if isBipartite else 'NO')