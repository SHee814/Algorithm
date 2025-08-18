def solution(players, callings):
    rank = { x: i for (i, x) in enumerate(players) }
    
    for call in callings:
        idx = rank[call]
        rank[call] -= 1
        rank[players[idx-1]] += 1
        players[idx], players[idx-1] = players[idx-1], players[idx]
        
    return players