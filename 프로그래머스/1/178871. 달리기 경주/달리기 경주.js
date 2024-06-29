function solution(players, callings) {
    const rankMap = new Map(Array.from(players, (x, i) => [x, i]));
    
    for (let name_current of callings) {
        const rank_current = rankMap.get(name_current);
        const rank_target = rank_current - 1;
        const name_target = players[rank_target];
        
        rankMap.set(name_current, rank_target);
        rankMap.set(name_target, rank_current);
        [players[rank_current], players[rank_target]] = [players[rank_target], players[rank_current]];
    }
    
    return players;
}