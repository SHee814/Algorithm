def solution(name, yearning, photo):
    score_map = { x: yearning[i] for (i, x) in enumerate(name) }
    result = []
    
    for ph in photo:
        score = sum(map(lambda x: score_map[x] if x in score_map else 0, ph))
        result.append(score)
        
    return result