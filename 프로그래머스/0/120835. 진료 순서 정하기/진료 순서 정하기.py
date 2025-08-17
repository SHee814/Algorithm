def solution(emergency):
    sorted_emergency = sorted(emergency, reverse=True)
    order_map = { x:i+1 for (i, x) in enumerate(sorted_emergency) }
    result = [ order_map[x] for x in emergency ]
    
    return result